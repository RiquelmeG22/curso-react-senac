import { useState } from "react"


export default function BtnCor() {

    const [vermelho, setVermelho] = useState(0);
    const [verde, setVerde] = useState(0);
    const [azul, setAzul] = useState(0);

    return (
        <div>
            <div className="flex flex-col gap-2">
                <button
                onClick={() => setVermelho(vermelho +1)}
                className="bg-red-600 text-white rounded px-6">
                Vermelho: {vermelho}
                </button>
                <button
                onClick={() => setVerde(verde +1)}
                className="bg-green-600 text-white rounded px-6">
                Verde: {verde}
                </button>
                <button
                onClick={() => setAzul(azul +1)}
                className="bg-blue-600 text-white rounded px-6">
                Azul: {azul}
                </button>
            </div>
        </div>
    )
}