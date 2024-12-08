"use client"
import Swal from "sweetalert2";
import { useSendTransaction, useAccount } from "wagmi";
import { parseEther, createPublicClient, http } from "viem";
import { readContract } from "viem";
import { mainnet } from "viem/chains";
import { useState, useEffect } from "react";

// Dirección y ABI del contrato
const CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678"; // Reemplaza con tu dirección
const CONTRACT_ABI = [
  {
    constant: true,
    inputs: [],
    name: "getTotalDonated",
    outputs: [{ name: "", type: "uint256" }],
    type: "function",
  },
];

interface CardDonativeProps {
  title: string;
  meta: number;
  progress: number;
}

const NewCardDonative = ({ title, meta, progress }: CardDonativeProps) => {
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const [totalDonated, setTotalDonated] = useState<number>(0);

  // Configura el cliente de Viem
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const { sendTransaction } = useSendTransaction({
    mutation: {
      onSuccess: async (tx) => {
        console.log("Transacción exitosa", tx);
        await fetchTotalDonated(); // Actualiza después de la transacción
        Swal.fire({
          title: "¡Bien hecho!",
          text: "La transacción ha sido exitosa. ¡Gracias por tu donación!",
          icon: "success",
        });
        setLoading(false);
      },
      onError: (error) => {
        console.error("Error al enviar la transacción: ", error);
        Swal.fire({
          title: "Error de envío",
          text: "Vaya, ha ocurrido un error al enviar la donación.",
          icon: "error",
        });
        setLoading(false);
      },
    },
  });

  // Maneja la transacción
  const handleDonate = async () => {
    if (!isConnected) {
      Swal.fire({
        title: "Usuario no conectado",
        text: "Por favor, conecta tu wallet antes de realizar una donación.",
        icon: "warning",
      });
      return;
    }

    setLoading(true);
    try {
      sendTransaction({
        to: CONTRACT_ADDRESS,
        value: parseEther("0.005"), // 0.005 ETH
      });
    } catch (error) {
      console.error("Error en la transacción:", error);
      setLoading(false);
    }
  };

  // Función para obtener el total donado
  const fetchTotalDonated = async () => {
    try {
      const total: bigint = await readContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "getTotalDonated",
        client,
      });
      setTotalDonated(Number(total) / 10 ** 18); // Convierte de Wei a ETH
    } catch (error) {
      console.error("Error al obtener el total donado:", error);
    }
  };

  useEffect(() => {
    fetchTotalDonated(); // Carga inicial
  }, []);

  const progressPercentage = (totalDonated / meta) * 100;

  return (
    <section className="w-64 h-96 bg-white shadow-lg m-auto rounded-lg p-4 border border-gray-200 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-lg text-center font-semibold text-gray-800">{title}</h2>

      <div className="text-sm text-gray-600 flex-col ">
        <p className="text-sm text-gray-600 mt-2">
          Donado: <span className="font-medium text-blue-600">{totalDonated.toFixed(4)} ETH</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Meta: <span className="font-medium text-blue-600">{meta} ETH</span>
        </p>

        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {progressPercentage.toFixed(0)}% completado
        </p>
      </div>

      <button
        onClick={handleDonate}
        className={`mt-4 w-full ${
          loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        } text-white text-sm font-semibold py-2 rounded-lg transition-colors`}
        disabled={loading || !isConnected}
      >
        {loading ? "Procesando..." : "Enviar Donación"}
      </button>
    </section>
  );
};

export default NewCardDonative;
