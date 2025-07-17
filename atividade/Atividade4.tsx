import React, { useState } from "react";

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    setTarefas([...tarefas, novaTarefa.trim()]);
    setNovaTarefa(""); 
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
          className="border border-gray-300 rounded px-3 py-2 w-64"
        />
        <button
          onClick={adicionarTarefa}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            className="bg-gray-100 px-4 py-2 rounded shadow-sm"
          >
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}
