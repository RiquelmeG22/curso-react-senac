export default function Cartao() {
  return (
    <div className="flex flex-col justify-between bg-yellow-300 w-96 h-56 rounded-xl p-4 shadow relative">
      {/* Topo */}
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-8">
          {/* Logo do Banco do Brasil */}
          <img
            src="https://assets.hgbrasil.com/finance/companies/big/banco-do-brasil.png"
            alt="Banco do Brasil"
            className="w-12 h-12 object-contain"
          />

          {/* Chip */}
          <div className="w-10 h-8 bg-gray-300 rounded-sm flex justify-center items-center"></div>
        </div>

        {/* Ourocard */}
        <h1 className="text-blue-700 text-3xl font-bold">ourocard</h1>
      </div>

      {/* Nome + VISA */}
      <div className="flex justify-between items-end">
        <p className="text-blue-800 font-medium">Riquelme Gomes Ramalho</p>
        <p className="text-2xl font-bold">VISA</p>
      </div>
    </div>
  );
}

