// import { useState } from "react";

// export default function LoginForm() {
//   const [email, setEmail] = useState<string>("");
//   const [senha, setSenha] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     console.log("Email:", email);
//     console.log("Senha:", senha);

//     // Aqui você pode enviar para a API ou processar os dados
    
//     // Limpar os campos 
//     setEmail("");
//     setSenha("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 w-64 p-4 bg-gray-100 rounded shadow"
//     >
//        <h1 className="text-3xl font-bold flex justify-center">
//             Login
//        </h1>
//       <input
//         type="email"
//         placeholder="E-mail"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 rounded"
//       />

//       <input
//         type="password"
//         placeholder="Senha"
//         value={senha}
//         onChange={(e) => setSenha(e.target.value)}
//         className="border p-2 rounded"
//       />

//       <button
//         type="submit"
//         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//       >
//         Enviar
//       </button>
//     </form>
//   );
// }


import { useState } from "react";

export default function Login() {
  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>(""); 
  const [endereco, setEndereco] = useState<string>("");
  const [dNasc, setDNasc] = useState<string>("");

  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("CPF:", cpf);
    console.log("Endereço:", endereco);
    console.log("Data de Nascimento:", dNasc);


      setCpf("");
      setNome("");
      setEndereco("");
      setDNasc("");
      
  };


  return (
    <div className=" bg-white w-90 h-120 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col space-y-8 bg-white h-full w-full ">
          <legend className="font-bold text-2xl w-full text-center mb-3">Cadastro</legend>

          <div>
            <label className="block font-bold mb-1">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border p-1"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">CPF:</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="border p-1"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Endereço:</label>
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="border p-1"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Data de Nascimento:</label>
            <input
              type="date"
              value={dNasc}
              onChange={(e) => setDNasc(e.target.value)}
              className="border p-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded w-20 text-center w-full"
          >
            Enviar
          </button>
        </fieldset>
      </form>
    </div>
  );
}
