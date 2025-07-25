
// import { useState } from "react"

// export default function Btn() {
//   const [contador, setContador] = useState(0)

//   return (
//     <div className="p-4">
//       <p className="text-lg font-bold">Contador: {contador}</p>
//       <button
//         onClick={() => setContador(contador + 1)}
//         className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
//       >
//         Clique aqui
//       </button>
//     </div>
//   )
// }


// Dado:

import React from "react";

export default function ListaDeNomes() {

  const lista = ["Ana", "Bruno", "Carlos"];

  return (
    <div>
      <h2>Lista de Nomes:</h2>
      <ul>
        {lista.map((nome, index) => (
          <li key={index}>Nome: {nome}</li>
        ))}
      </ul>
    </div>
  );
}
