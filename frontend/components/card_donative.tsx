"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useSendTransaction, useAccount } from "wagmi";
import { parseEther } from "viem";

interface CardDonativeProps {
  title: string;
  meta: number;
  progress: number;
  information: string;
}

const CardDonative = ({
  title,
  meta,
  progress,
  information,
}: CardDonativeProps) => {
  const router = useRouter();
  const { address, isConnected, chain } = useAccount();
  const { sendTransaction } = useSendTransaction({
    mutation: {
      onSuccess: (tx) => {
        console.log("transaccion exitosa", tx);
        Swal.fire({
          title: "Bien hecho",
          text: "La transaccion ha sido exitosa, Gracias por tu Donacion!",
          icon: "success",
        });
      },
      onError: (error) => {
        console.error("Error al enviar la transaccion: ", error);
        Swal.fire({
          title: "Error de envio",
          text: "vaya, ha ocurrido un error al enviar la donacion",
          icon: "error",
        });
      },
    },
  });

  const handleDonate = async () => {
    if (!isConnected) {
      Swal.fire({
        title: "Usuario no conectado",
        text: "Por favor, conecta tu wallet antes de realizar una donación.",
        icon: "warning",
      });
      return;
    }

    try {
      sendTransaction({
        to: "0x77bf99d25f597fa6886d45955f377141be0849c6", // Reemplaza por la dirección correcta
        value: parseEther("0.005"), // 0.01 ETH en Wei
      });
    } catch (error) {
      console.error("Error en la transacción:", error);
    }
  };

  const handleRouter = () => {
    // Redirige a una página dinámica utilizando el prop `information`
    router.push(`/project/${information}`);
  };

  const progressPercentage = (progress / meta) * 100;
  return (
    <section className="w-64 h-96 bg-white shadow-lg m-auto rounded-lg p-4 border border-gray-200 flex flex-col justify-beetwen align-beetwen transform transition-transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-lg text-center font-semibold text-gray-800">
        {title}
      </h2>

      <div className="text-sm text-gray-600 flex-col ">
        <p className="text-sm text-gray-600 mt-2">
          Donado: <span className="font-medium text-blue-600">{progress}$</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Meta: <span className="font-medium text-blue-600">{meta}$</span>
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
        onClick={handleRouter}
        className="mt-4 w-full bg-green-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Sobre el proyecto
      </button>
      <button
        onClick={handleDonate}
        className="mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Enviar Donacion
      </button>
    </section>
  );
};

export default CardDonative;
