import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Senha:", senha);

    // Aqui você pode enviar para a API ou processar os dados
    
    // Limpar os campos 
    setEmail("");
    setSenha("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-64 p-4 bg-gray-100 rounded shadow"
    >
       <h1 className="text-3xl font-bold flex justify-center">
            Login
       </h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}
