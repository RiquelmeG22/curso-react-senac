import { useState } from "react";

export default function BtnContador() {

    const [vermelho, setVermelho] = useState(0);
    const [azul, setAzul] = useState(0);
    const [verde, setVerde] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <button 
            onClick={() => setVermelho(vermelho +1)}
            className="bg-red-600 text-white px-4 rounded"
            >
            Vermelho: {vermelho}
            </button>
            <button 
            onClick={() => setAzul(azul +1)}
            className="bg-blue-600 text-white px-4 rounded"
            >
            Vermelho: {azul}
            </button>
            <button 
            onClick={() => setVerde(verde +1)}
            className="bg-green-600 text-white px-4 rounded"
            >
            Vermelho: {verde}
            </button>
        </div>
    )
}