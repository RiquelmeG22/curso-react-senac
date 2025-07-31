'use client'

import { useEffect, useState } from 'react'

type Produto = {
  id: number
  title: string
  image: string
  price: number
}

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregar() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProdutos(data)
      setCarregando(false)
    }

    carregar()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {carregando
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse space-y-2">
              <div className="bg-gray-300 h-40 w-full rounded" />
              <div className="bg-gray-300 h-4 w-3/4 rounded" />
              <div className="bg-gray-300 h-4 w-1/2 rounded" />
            </div>
          ))
        : produtos.map((produto) => (
            <div key={produto.id} className="border p-4 rounded shadow">
              <img
                src={produto.image}
                alt={produto.title}
                className="h-40 object-contain w-full mb-2"
              />
              <h2 className="text-lg font-bold">{produto.title}</h2>
              <p className="text-green-600 font-semibold">
                R$ {produto.price}
              </p>
            </div>
          ))}
    </div>
  )
}
