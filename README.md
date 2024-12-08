# Hackaton - Proyecto de Blockchain

-----------------------------------------------------

## 1. Introducción 🏆

Bienvenidos al proyecto que hemos realizado para la Hackaton de Blockchain. 

En la Hackaton nuestra meta era aprender sobre el temario que se proponía en el proyecto, en este caso Blockchain, para poder alcanzar un nivel con el que realizar un proyecto que se ajustara a los requerimientos dados por la misma.

-----------------------------------------------------

## 2. Objectivo de nuestro proyecto / ¿En qué consiste? 🎯

Nuestro principal objetivo es poder adquirir el máximo número de conocimientos sobre Blockchain durante el transcurso de la Hackaton y complementarlos con nuestros conocmientos en otras áreas para poder aplicarlos en la creación de una página web que permita al usuario realizar donaciones a determinados colectivos en sitauciones de necesidad de una manera más segura y transparente a la tradicional, gracias a la implementación de Blockchain. Esto implicaría una mayor sensación de seguridad y confianza en el usuario al conocer que sus donaciones van a ser totalmente transparentes e instántaneas, lo cual es una de las ideas principales de nuestro proyecto. Para incentivar a que el usuario done una mayor cantidad, hemos planteado un sistema de objetivos, diferente para cada destino de donación, en el que, cuando el donante ofrece la aportación económica necesaria para poder cumplir con él, obtiene la posibilidad de adquirir un NFT como agradecimiento por cumplir con el objetivo.

-----------------------------------------------------

## 3. Código de los contratos:

El código utiliza el SDK de Stylus para implementar un manejador (handler) que permite registrar y ejecutar funciones basadas en identificadores únicos llamados selectors. Estas funciones están diseñadas para interactuar con un almacenamiento persistente, manejar datos de entrada y salida, y proporcionar respuestas claras al usuario.

La función principal, handler, actúa como punto de entrada y se encarga de identificar qué función ejecutar analizando el selector incluido en la llamada. Para lograr esto, utiliza un registro (FunctionRegistry) que asocia cada selector con su implementación correspondiente. Este enfoque facilita la modularidad y escalabilidad del sistema, permitiendo agregar nuevas funciones fácilmente.

Entre las funciones implementadas, destacan:

set_value: Permite guardar un valor de 32 bytes en un espacio de almacenamiento persistente. Si el tamaño del valor no es el esperado, devuelve un mensaje de error indicando un problema con la longitud.
get_value: Recupera el valor almacenado previamente en el mismo espacio. Si no se encuentra un valor, devuelve un mensaje indicando que no ha sido configurado.
hello_world: Una función básica que devuelve un mensaje de saludo fijo, utilizada principalmente como demostración.
El código también incluye utilidades generales para manejar resultados y optimizar el uso de memoria, como el uso de un buffer predefinido para evitar asignaciones dinámicas y funciones auxiliares como _return_success_bebi32 para construir respuestas estandarizadas. Estas prácticas aseguran un funcionamiento eficiente en entornos con recursos limitados, como los basados en blockchain.

En conjunto, este código demuestra cómo implementar un sistema de manejo de funciones que interactúan con almacenamiento persistente y responden dinámicamente a las solicitudes del usuario. Es un ejemplo práctico y extensible para entornos basados en Stylus SDK.

-----------------------------------------------------

## 4. Playground


El código index.ts código demuestra cómo interactuar con un contrato inteligente desplegado en la red de pruebas Arbitrum Sepolia, utilizando la librería viem. Se definen dos clientes: uno público para consultar datos sin modificar el estado del contrato y otro privado, configurado con una clave privada extraída de las variables de entorno, para realizar transacciones que alteran el estado.

La interacción con el contrato se basa en un ABI simplificado que incluye funciones como hello_world (que devuelve un mensaje de texto) y set_value (para almacenar un valor). La función read usa el cliente público para llamar a hello_world, mientras que write utiliza el cliente privado para invocar set_value con un argumento de tipo entero.

Al ejecutarse, el código llama a read por defecto, lo que permite obtener un mensaje del contrato inteligente. La función write está definida pero no se ejecuta automáticamente, y sirve para enviar transacciones firmadas. Este ejemplo es útil para entender los principios básicos de interacción con contratos inteligentes en Ethereum y redes compatibles.

-----------------------------------------------------

## 5. Mejoras

¿Si tuviéramos más tiempo, qué haríamos?

Lo más destacable era la implementación de una mayor cantidad de objetivos y ampliar las posibilidades de donaciones para que el usuario disponga de más opciones en las que poder realizar las donaciones para ayudar a otros colectivos necesitados.

-----------------------------------------------------

## 6. Conclusión ✨

Para nosotros ha sido realmente interesante llevar a cabo el proyecto, nos ha resultado una jornada intensa donde hemos puesto a prueba una amplia variedad de capacidades, empezando por la organización y la capacidad mental al adentrarnos en un área en el que teníamos escaso conocimiento previo, por lo que a su vez también estamos satisfechos de haber tenido la oportunidad de haber podido aprender tal cantidad de nuevos conceptos y posibilidades que ofrece el campo de Blockchain. Todos los miembros del equipo estamos de acuerdo de que para nosotros esta ha sido una experiencia muy enriquecedora y que sin duda será de mucha utilidad en un futuro dado que realizamos proyectos en áreas similares con las que podemos compatibilizar lo aprendido durante la Hackaton.


-----------------------------------------------------

## 7. Equipo

Este proyecto ha sido creado por Adrián Pedrero Miró, Manuel Cuesta Barrios y Nicolás Rosón Muñoz en el campus de 42 Madrid durante la Hackaton "Learn & Earn" llevada por Lemon, centrada en el ámbito de Blockchain y sus diferentes utilidades.