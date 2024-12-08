import { createPublicClient, createWalletClient, http, parseAbi, parseEther } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
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

// https://sepolia.arbiscan.io/address/const CONTRACT_ADDRESS = "0x46be8751225be83d7a9b97fec0214c53795d8477"
const CONTRACT_ADDRESS = "0xc41287bbfbb0fedb6a0e616e1a695fd269b86e1f"

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
    functionName: "hello_world",
  })

  console.debug(`Contract: ${result}`)
}
// 0xbd24074f68a5300eaf00c570f103dc1962e4b219
async function donate() {
  const result = await client.writeContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "donate",
    //que propiedades espera write contact
    gas: 2000000,
    value: parseEther("0.005"), // Donación de 0.005 ETH
  });

  console.debug(`Transacción realizada: ${result}`);
}

async function getTotalDonations() {
  const result = await publicClient.readContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "get_total_donations",
  });

  console.debug(`Total de donaciones: ${result}`);
}

donate(); // Prueba de donación
//getTotalDonations(); // Prueba de lectura
//read()
// write()
