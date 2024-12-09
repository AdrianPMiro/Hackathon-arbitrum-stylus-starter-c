#include "../include/stylus_sdk.h"
#include "../stylus-sdk-c/include/stylus_utils.h"
#include "../stylus-sdk-c/include/storage.h"
#include "../stylus-sdk-c/include/string.h"
#include "../stylus-sdk-c/include/bebi.h"

#define DONATION_AMOUNT 5000000000000000  // 0.005 Albitrum en la unidad más pequeña

// AÑADIR EL SLOT DE ALMACENAMIENTO de acumulacion de dinero total
#define STORAGE_SLOT__value 0x0

/**
 * General utils/helpers
 */

// buffer used to write output, avoiding malloc
uint8_t buf_out[32];

// succeed and return a bebi32
ArbResult inline _return_success_bebi32(bebi32 const retval)
{
  ArbResult res = {Success, retval, 32};
  return res;
}

// Función para almacenar un valor (para ejemplos previos)
/**
 * Función: set_value
 * -------------------
 * Almacena un valor específico en el almacenamiento del contrato inteligente.
 *
 * Parámetros:
 *  - input: puntero al valor de 32 bytes que se desea almacenar.
 *  - len: longitud de los datos de entrada (debe ser exactamente 32 bytes).
 *
 * Comportamiento:
 *  1. Verifica que la longitud de entrada sea de 32 bytes.
 *  2. Guarda el valor en la dirección predeterminada de almacenamiento (STORAGE_SLOT__value).
 *  3. Escribe el valor en el almacenamiento permanente.
 *
 * Retorna:
 *  - `Success`: si el valor se almacena correctamente.
 *  - `Failure`: si ocurre un error, como longitud de entrada inválida.
 */
ArbResult set_value(uint8_t *input, size_t len)
{

  if (len != 32)
  {
    // revert if input length is not 32 bytes
    return _return_short_string(Failure, "InvalidLength");
  }

  uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT__value + 0); // Get the slot address

  // Allocate a temporary buffer to store the input
  storage_cache_bytes32(slot_address, input);

  // Flush the cache to store the value permanently
  storage_flush_cache(false);
  return _return_success_bebi32(input);
}

// Función para obtener el valor (ejemplo previo)
/**
 * Función: get_value
 * -------------------
 * Recupera el valor acumulado actual almacenado en el contrato.
 *
 * Parámetros:
 *  - input: no se utiliza en esta función (puede ser NULL).
 *  - len: longitud de los datos de entrada (se espera que sea 0).
 *
 * Comportamiento:
 *  1. Accede al almacenamiento en la dirección predeterminada (STORAGE_SLOT__value).
 *  2. Carga el valor almacenado en un buffer de salida.
 *  3. Si el valor no ha sido configurado previamente, retorna un error.
 *
 * Retorna:
 *  - `Success`: con el valor almacenado si existe.
 *  - `Failure`: si el valor no ha sido configurado (ej. "NotSet").
 */
ArbResult get_value(uint8_t *input, size_t len)
{
  // Eliminamos el + 0, para poder ir sumando el offset
  uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT__value); // Get the slot address

  storage_load_bytes32(slot_address, buf_out);
  if (bebi32_is_zero(buf_out))
  {
    return _return_short_string(Failure, "NotSet");
  }
  return _return_success_bebi32(buf_out);
}

// Función de ejemplo
ArbResult hello_world(uint8_t *input, size_t len)
{
  return _return_short_string(Success, "Hola desde 42 Madrid!!");
}


// Función para procesar la donación

/**
 * Función: donate
 * ----------------
 * Procesa una donación en el contrato inteligente, actualiza el valor acumulado 
 * y transfiere el monto al destinatario.
 *
 * Parámetros:
 *  - input: no se utiliza en esta función (puede ser NULL).
 *  - len: longitud de los datos de entrada (se espera que sea 0).
 *
 * Comportamiento:
 *  1. Obtiene el valor enviado en la transacción (msg.value).
 *  2. Recupera el valor acumulado actual del almacenamiento.
 *  3. Suma msg.value al valor acumulado.
 *  4. Actualiza el almacenamiento con el nuevo valor acumulado.
 *  5. Transfiere msg.value a una dirección de destinatario predeterminada.
 *
 * Retorna:
 *  - `Success`: con el valor acumulado actualizado si todo se ejecuta correctamente.
 *  - `Failure`: en caso de errores, como longitud de entrada inválida, overflow al sumar, 
 *               fallo en el almacenamiento o en la transferencia.
 */
ArbResult donate(uint8_t *input, size_t len)
{
    uint8_t message_value[32] = {0}; // BEBI para almacenar msg.value
    msg_value(message_value);        // Obtener el valor enviado en la transacción

    // Leer el valor acumulado actual usando `get_value`
    ArbResult accumulated_result = get_value(NULL, 0);
    if (accumulated_result.status != Success) {
        // Si no existe un valor previo, asumimos que es 0
        memset((void *)accumulated_result.output, 0, 32); // Cast a (void *) para evitar el warning
    }

    // Sumar el valor de la transacción al acumulado
    int carry = bebi_add((uint8_t *)accumulated_result.output, 32, message_value, 32); // Cast a (uint8_t *)
    if (carry == -1) {
        return _return_short_string(Failure, "OverflowError"); // Manejo de error por overflow
    }

    // Guardar el nuevo valor acumulado usando `set_value`
    ArbResult set_result = set_value((uint8_t *)accumulated_result.output, 32); // Cast a (uint8_t *)
    if (set_result.status != Success) {
        return _return_short_string(Failure, "StorageError"); // Manejo de error por falta de espacio.
    }

    // Casteamos la dirección de destino a formato (uint8_t *)  
    uint8_t recipient_address[] = {
        0x31, 0xDA, 0xED, 0xB2, 0x4D, 0x8E, 0x04, 0xEA, 0x46, 0x2C,
        0x17, 0x28, 0x46, 0xAB, 0x1D, 0x96, 0xDF, 0x6E, 0xF8, 0x21};

    // Transferir el valor al destinatario
    uint8_t result = call_contract(
        recipient_address,  // Dirección de destino
        NULL,               // Sin datos de llamada
        0,                  // Longitud de datos de llamada
        message_value,      // Monto en wei
        UINT64_MAX,         // Límite de gas máximo
        &len);              // Longitud de los datos devueltos

    if (result != 0) {
        return _return_short_string(Failure, "TransferFailed");
    }

    // Devolver el valor acumulado actualizado
    return _return_success_bebi32(accumulated_result.output);
}


// Handler para procesar la función del contrato
int handler(size_t argc)
{
  uint8_t argv[argc];
  read_args(argv);  // Leer los argumentos enviados a la función

  // Registro de funciones disponibles (en este caso solo "donate", "set_value", "get_value")
  FunctionRegistry registry[] = {
      {to_function_selector("donate()"), donate},
      {to_function_selector("set_value(uint256)"), set_value},
      {to_function_selector("get_value()"), get_value},
      {to_function_selector("hello_world()"), hello_world},
  };

  uint32_t signature = *((uint32_t *)argv);  // Analizamos el selector de función

  // Llamamos a la función correspondiente
  ArbResult res = call_function(registry,
                                sizeof(registry) / sizeof(registry[0]),
                                signature, argv + 4, argc - 4 // Excluyendo el selector
  );

  // Escribir el resultado de la llamada
  return (write_result(res.output, res.output_len), res.status);
}

ENTRYPOINT(handler)
