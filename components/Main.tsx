"use client";
import React from "react";
import Atividade1 from "@/atividade/Atividade1";
import Atividade2 from "@/atividade/Atividade2";
import Atividade3 from "@/atividade/Atividade3";
import Atividade4 from "@/atividade/Atividade4";
import Atividade5 from "@/atividade/Atividade5";
import Atividade6 from "@/atividade/Atividade6";
import Atividade7 from "@/atividade/Atividade7";
import Atividade8 from "@/atividade/Atividade8";
import Atividade9 from "@/atividade/Atividade9";
import Atividade10 from "@/atividade/Atividade10";

type MainProps = {
  paginaAtual: string;
};

export default function Main({ paginaAtual }: MainProps) {
  return (
    <main className="flex flex-1 overflow-auto items-center justify-center bg-gray-200  p-4">
      {paginaAtual === "atividade1" && <Atividade1 />}
      {paginaAtual === "atividade2" && <Atividade2 />}
      {paginaAtual === "atividade3" && <Atividade3 />}
      {paginaAtual === "atividade4" && <Atividade4 />}
      {paginaAtual === "atividade5" && <Atividade5 />}
      {paginaAtual === "atividade6" && <Atividade6 />} 
      {paginaAtual === "atividade7" && <Atividade7 />} 
      {paginaAtual === "atividade8" && <Atividade8 />} 
      {paginaAtual === "atividade9" && <Atividade9 />} 
      {paginaAtual === "atividade10" && <Atividade10 />} 
     
    </main>
  );
}
