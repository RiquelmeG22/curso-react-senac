// 'use client'

// import { useEffect, useState } from "react";
// import Login from "@/components/Login";
// import Loja from "@/components/Loja";
// import Produtos from "@/components/Produtos";

// export default function Page() {
//   const [logado, setLogado] = useState(false);

//   useEffect(() => {
//     const loginSalvo = localStorage.getItem("logado");
//     if (loginSalvo === "true") {
//       setLogado(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setLogado(true);
//     localStorage.setItem("logado", "true");
//   };

//   if (!logado) return <Login onLogin={handleLogin} />;

//   return (
//     <>
//       <Loja />
//       <Produtos />
//     </>
//   );
// }


import { userProps } from "@/tipos"
import Link from 'next/link';

export default  async function Index() {

    const response =  await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`)
    const data = await response.json();
    const dados: userProps[] = Array.isArray(data) ? data : [];

  return (
    <div>
      <Link href={'/cadastro'}>Cadastrar Usuario</Link>
      
        {dados.map((item) => (
          <div key={item.id}>
            <h1>nome: {item.name} emial: {item.email}</h1>
            <Link href={`/editarUsuario/${item.id}`}>Editar Usuario</Link>
            <Link href={`/deletarUsuario/${item.id}`}>Deletar Usario</Link>
            
          </div>
        ))}
    </div>
  )
}



