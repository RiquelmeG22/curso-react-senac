import React from "react";

type AsideProps = {
  paginaAtual: string;
  setPaginaAtual: (id: string) => void;
};

export default function Aside({ paginaAtual, setPaginaAtual }: AsideProps) {
  const botoes = [
    { id: "atividade1", label: "Atividade 1" },
    { id: "atividade2", label: "Atividade 2" },
    { id: "atividade3", label: "Atividade 3" },
    { id: "atividade4", label: "Atividade 4" },
    { id: "atividade5", label: "Atividade 5" },
    { id: "atividade6", label: "Atividade 6" },
  ];

  return (
    <aside className="flex flex-col bg-blue-700 text-white py-6 w-40">
      <h1 className="pb-4 font-bold text-lg p-2">Menu</h1>
      <ul className="space-y-2">
        {botoes.map((botao) => (
          <li key={botao.id}>
            <button
              onClick={() => setPaginaAtual(botao.id)}
              className={`flex px-4 py-2 w-full cursor-pointer ${
                paginaAtual === botao.id ? "bg-blue-500" : "hover:bg-blue-500"
              }`}
            >
              {botao.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}