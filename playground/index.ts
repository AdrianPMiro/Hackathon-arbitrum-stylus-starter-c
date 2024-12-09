import { createPublicClient, createWalletClient, http, parseAbi, parseEther } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import { formatEther } from "ethers"; // Asegúrate de tener ethers.js instalado

import "dotenv/config"

const ABI = parseAbi([
  "function hello_world() public view returns (string)",
  "function set_value(uint256 value) public",
  "function get_value() public view returns (uint256)",
  "function donate() public payable",
  "function get_total_donations() public view returns (uint256)",
])

// primero function (funcion) luego nombre de la funcion
// luego visibilidad: public ( todo el mundo) external ( cuentas)
// 
const account = privateKeyToAccount((process as any).env.PRIVATE_KEY)

const client = createWalletClient({
  chain: arbitrumSepolia,
  transport: http(),
  account,
})

const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
})

// Ponemos la dirección del contrato
const CONTRACT_ADDRESS = "0xf961b9488087e33892b6e522f0e150235b677d66"

async function write() {
  const result = await client.writeContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "set_value",
    args: [BigInt(12)],
  })

  console.debug(`Contract: ${result}`)
}

async function read() {
  const result = await publicClient.readContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "get_total_donations",
  })

  console.debug(`Contract: ${result}`)
}

/**
 * Función para realizar una donación a un contrato inteligente.
 * 
 * Esta función interactúa con el contrato inteligente en la red Arbitrum Sepolia y realiza una transacción 
 * de donación a la dirección del contrato. La donación se realiza enviando una cantidad de 0.005 ETH 
 * al contrato.
 * 
 * 1. Se establece la configuración de la transacción, que incluye el gas y la cantidad de ETH a donar.
 * 2. Se llama al contrato con la función `donate` especificada en el ABI del contrato.
 * 3. Se espera la respuesta del contrato para confirmar la transacción.
 */
async function donate() {
  const result = await client.writeContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "donate",
    gas: BigInt(2000000),
    value: parseEther("0.005"),
  });

  console.debug(`Transacción realizada: ${result}`);
}


/**
 * Función para obtener el total de dinero donado.
 * 
 * Esta función lee el valor total de las donaciones realizadas al contrato, usando la función 
 * `get_value` del contrato inteligente. Este valor se muestra en formato ETH para que sea 
 * más fácil de entender.
 * 
 * 1. Se consulta el contrato para obtener el valor total de las donaciones (almacenado en el contrato).
 * 2. Se convierte el valor de donaciones de su formato interno (wei) a ETH usando la función `formatEther`.
 * 3. Se imprime la cantidad total de dinero donado.
 */
async function getTotalDonations() {
  try {
    const result = await publicClient.readContract({
      abi: ABI,
      address: CONTRACT_ADDRESS,
      functionName: "get_value", 
    });
    const totalDonationsInEth = formatEther(result);
    console.debug(`Total de donaciones: ${totalDonationsInEth} ETH`); // Castear de (wei) a ETH.
  } catch (error) {
    console.error(`Error al obtener el total de donaciones: ${error}`);
  }
}

donate(); // Prueba de donación
getTotalDonations(); // Prueba de lectura de dinero total
//read()
// write()
