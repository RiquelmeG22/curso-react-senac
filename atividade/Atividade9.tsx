// import { useState } from "react"


// export default function BtnCor() {

//     const [vermelho, setVermelho] = useState(0);
//     const [verde, setVerde] = useState(0);
//     const [azul, setAzul] = useState(0);

//     return (
//         <div>
//             <div className="flex flex-col gap-2">
//                 <button
//                 onClick={() => setVermelho(vermelho +1)}
//                 className="bg-red-600 text-white rounded px-6">
//                 Vermelho: {vermelho}
//                 </button>
//                 <button
//                 onClick={() => setVerde(verde +1)}
//                 className="bg-green-600 text-white rounded px-6">
//                 Verde: {verde}
//                 </button>
//                 <button
//                 onClick={() => setAzul(azul +1)}
//                 className="bg-blue-600 text-white rounded px-6">
//                 Azul: {azul}
//                 </button>
//             </div>
//         </div>
//     )
// }

// import { useState } from "react";

// export default function BtnContador () {

//     const [contador, setContador] = useState<number>(0);


//     return(
//         <div className="text-center flex flex-col">
//            <div className="flex flex-col gap-2">
//            <h1>{contador}</h1>
//                 <button onClick={() => setContador(contador +1)}>MAIS</button>
//                 <button onClick={() => setContador(contador > 0 ? contador -1 : 0)}>MENOS</button>
//                 <button onClick={() => setContador(0)}>RESETAR</button>
//            </div>
//         </div>
//     );
// }

// import { useState } from "react";

// export default function Tema() {
//   const [escuro, setEscuro] = useState<boolean>(false);

//   const alternarTema = () => {
//     setEscuro(!escuro);
//   };

//   return (
//     <div
//       className={`w-full h-full flex flex-col items-center justify-center ${
//         escuro ? "bg-gray-800 text-white" : "bg-white text-black"
//       }`}
//     >
//       <h1 className="text-2xl mb-4">
//         Tema atual: {escuro ? "🌙 Escuro" : "☀️ Claro"}
//       </h1>

//       <button
//         onClick={alternarTema}
//         className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
//       >
//         Alternar Tema
//       </button>
//     </div>
//   );
// }

import { useState } from "react";

export default function Tema() {
    
    const [escuro, setEscuro] = useState<boolean>(false)

    const alternarTema = () => {
        setEscuro(!escuro);
    };

    return (
        <div
        className={`w-full h-full flex flex-col items-center justify-center ${
            escuro ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        >
        
        <h1 className="text-2xl mb-4">
            Tema Atual: {escuro ? "Escuro" : "Claro"}
        </h1>

        <button 
        onClick={alternarTema}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
            Alterar Tema
        </button>

        </div>
    )
}