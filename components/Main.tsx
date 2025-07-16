
"use client";
import React from "react";
import Atividade1 from "@/atividade/Atividade1";
import Atividade2 from "@/atividade/Atividade2";


// import Atividade3 from "@/atividades/Atividade-3";
// import Atividade4 from "@/atividades/Atividade-4";
// import Atividade5 from "@/atividades/Atividade-5";
// import Atividade6 from "@/atividades/Atividade-6";

type MainProps = {
  paginaAtual: string;
};

export default function Main({ paginaAtual }: MainProps) {
  return (
    <main className="flex flex-1 overflow-auto p-4 items-center justify-center bg-neutral-800">
      {paginaAtual === "atividade1" && <Atividade1 />}
      {paginaAtual === "atividade2" && <Atividade2 />}
      {/* // {paginaAtual === "atividade3" && <Atividade3 />}
      // {paginaAtual === "atividade4" && <Atividade4 />}
      // {paginaAtual === "atividade5" && <Atividade5 />}
      // {paginaAtual === "atividade6" && <Atividade6 />} */}
    </main>
  );
}
