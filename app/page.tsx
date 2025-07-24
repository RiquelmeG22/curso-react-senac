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