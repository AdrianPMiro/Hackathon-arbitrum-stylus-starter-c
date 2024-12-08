const CardDonative = ({ title, meta, progress }) => {
    const progressPercentage = (progress / meta) * 100;
    return (
        <section className="w-64 h-96 bg-white shadow-lg m-auto rounded-lg p-4 border border-gray-200 flex flex-col justify-beetwen align-beetwen transform transition-transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-lg text-center font-semibold text-gray-800">{title}</h2>

            <div className="text-sm text-gray-600 flex-col ">
                <p className="text-sm text-gray-600 mt-2">Donado: <span className="font-medium text-blue-600">{progress}$</span></p>
                <p className="text-sm text-gray-600 mt-1">Meta: <span className="font-medium text-blue-600">{meta}$</span></p>
                <p className="text-xs text-gray-400">Progreso: 25%</p>
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
            <button className="mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors">Enviar Donacion</button>
        </section>
    )
}

export default CardDonative;