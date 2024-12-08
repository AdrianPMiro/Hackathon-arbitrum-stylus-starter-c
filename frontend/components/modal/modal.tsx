export default function Modal({ isOpen, onClose, donation, handleDonate, loading, isConnected }) {
    const progressPercentage = (donation.progress / donation.meta) * 100;
  
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`relative bg-white w-80 rounded-lg p-6 shadow-lg transform transition-transform ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <h2 className="text-lg font-semibold text-center text-gray-800">
            {donation.title}
          </h2>
  
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Donado: <span className="font-medium text-blue-600">{donation.progress.toFixed(2)} ETH</span>
            </p>
            <p>
              Meta: <span className="font-medium text-blue-600">{donation.meta} ETH</span>
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
  
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleDonate}
              className={`flex-1 py-2 rounded-lg text-white font-semibold transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading || !isConnected}
            >
              {loading ? "Procesando..." : "Enviar Donación"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition font-semibold"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }
  