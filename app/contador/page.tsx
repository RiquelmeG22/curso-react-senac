'use client'

import { useCounter } from "../hooks/hooks/useCounter";



const Component = () => {
    const { contador, incrementar, decerentar } = useCounter();

    return (
        <>
            <p className="flex justify-center items-center space-y-4 bg-blue-300 text-black">Contador:{contador}</p>

            <button
                className="w-full space-y-4 bg-blue-300 text-black"
                onClick={incrementar}>Aumentar</button>
            <button
                className="space-y-4 bg-blue-300 text-black w-full"
                onClick={decerentar}>Diminuir</button>
        </>

    );

}

export default Component;


