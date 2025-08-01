'use client'

import { useCounter } from "./hooks";



const Component = () => {
   const { contador , incrementar, decerentar} = useCounter();

    return (
    <>
        <p>Count: {contador}</p>

        <button onClick={incrementar}>Aumentar</button>
        <button onClick={decerentar}>Diminuir</button>
    </>

);

}


