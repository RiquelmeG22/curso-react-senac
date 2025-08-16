'use client'

import { userProps } from "@/tipos"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function FormularioUser({ id, name = "", email = "" }: userProps) {
  const [userid] = useState<number | undefined>(id) // não precisa alterar depois
  const [nome, setNome] = useState(name ?? "")
  const [userEmail, setEmail] = useState(email ?? "")
  const rota = useRouter()

  async function Salvar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formulario = {
      id: userid,
      nome,
      email: userEmail,
    }

    const metodo = userid ? "PUT" : "POST"

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`, {
      method: metodo,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formulario),
    })

    const dados = await response.json()
    if (dados) {
      rota.push("/")
    }
  }



  async function Excluir() {
    if (!userid) return;
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${userid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ id: userid})

    }); 

  }
  


  return (
    <div>
      <form
        onSubmit={Salvar}
        className="flex flex-col justify-center items-start space-y-5 p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto"
      >
        <fieldset className="flex flex-col space-y-2 w-full">
          <legend className="text-lg font-semibold mb-2">Cadastro</legend>

          <label className="text-sm font-medium">Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <label className="text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu Email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            {userid ? "Editar" : "Cadastrar"}
          </button>

        <button
            type="button" 
            onClick={Excluir}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
          >
            Excluir
          </button>

        </fieldset>
      </form>
    </div>
  )
}
