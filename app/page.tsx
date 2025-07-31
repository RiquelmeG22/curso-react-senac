'use client'

import { useEffect, useState } from "react";
import Login from "@/components/Login";
import Loja from "@/components/Loja";
import Produtos from "@/components/Produtos";

export default function Page() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const loginSalvo = localStorage.getItem("logado");
    if (loginSalvo === "true") {
      setLogado(true);
    }
  }, []);

  const handleLogin = () => {
    setLogado(true);
    localStorage.setItem("logado", "true");
  };

  if (!logado) return <Login onLogin={handleLogin} />;

  return (
    <>
      <Loja />
      <Produtos />
    </>
  );
}
