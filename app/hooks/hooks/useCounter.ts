import { useState } from "react";


const useCounter = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decerentar = () => {
    setContador(contador - 1);
  }

  return {
    contador,
    incrementar,
    decerentar
  }
}

export { useCounter }