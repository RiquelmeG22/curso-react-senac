import { useState } from "react";

export default function Like(){

    const [curtida, setCurtida] = useState(false);
    const [totalCurtidas, setTotalCurtidas] = useState(0);

    const toggleCurtir = () => {
    if (curtida) {
      setCurtida(false);
      setTotalCurtidas(totalCurtidas - 1);
    } else {
      setCurtida(true);
      setTotalCurtidas(totalCurtidas + 1);
    }
  };

 return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button
        onClick={toggleCurtir}
        className={`px-4 py-2 rounded text-white 
          ${curtida ? "bg-red-500" : "bg-gray-500"}`}
      >
        {curtida ? "Descurtir" : "Curtir"}
      </button>


      <p className="text-lg">
        Total de curtidas: <span className="font-bold">{totalCurtidas}</span>
      </p>
    </div>
  );
}
