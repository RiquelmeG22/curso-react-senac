"use client";
import React, { useState } from "react";
import Aside from "@/components/Aside";
import Main from "@/components/Main";



export default function PaginaComAtividades() {
  const [paginaAtual, setPaginaAtual] = useState("atividade1");

  return (
    <div className="flex min-h-screen w-full">
      <Aside paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      
    <div className="flex-1 overflow-y-auto">
        <Main paginaAtual={paginaAtual} />     
        
           
    </div>
    </div>
  );
}





// type PropApi = {
//     id: number,
//     name: string,
//     username: string,
//     email: string
// }


// // server side 

// export default async function Loja() {
    
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users: PropApi[] = await response.json();
//     console.log(users)

//     return (
//         <div>
//             <ul className="space-y-2">
//                 {users.map(user => (
//                     <li key={user.id} className="border-2 border-gray-400 rounded-2xl ">
//                         <h1 className="font-bold">{user.name}</h1>
//                         <h1 className="font-bold">{user.username}</h1>
//                         <h1 className="font-bold">{user.email}</h1>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )

// }


// 'use client'

// import { useEffect, useState } from "react"

// type User = {
//   id: number
//   name: string
//   email: string
// }

// export default function ClientSide() {
//   const [user, setUser] = useState<User | null>(null)

//   async function fetchUser(id: number) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     const data = await response.json()
//     console.log("Resultado da API:", data)
//     setUser(data)
//   }

//   useEffect(() => {
//     fetchUser(3) 
//   }, [])

//   return (
//     <div className="p-4">
//       {user ? (
//         <div className="border-2 border-gray-300 rounded-xl p-4">
//           <p className="font-bold">Id: {user.id}</p>
//           <p className="font-bold">Nome: {user.name}</p>
//           <p className="font-bold">Email: {user.email}</p>
//         </div>
//       ) : (
//         <p>Carregando usuário...</p>
//       )}
//     </div>
//   )
// }



