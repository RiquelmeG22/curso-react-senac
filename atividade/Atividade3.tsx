import React, { useState } from "react";

export default function Saudacao() {
  const [nome, setNome] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        className="border border-gray-300 rounded px-3 py-2 w-64"
      />

      <p className="text-lg text-gray-700">
        {nome.trim()
          ? `Olá ${nome.trim()}`
          : "Digite seu nome"}
      </p>
    </div>
  );
}
