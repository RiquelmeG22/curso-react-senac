

type Product = {
  id: number
  title: string
  image: string
  price: number
  description: string
}

export default async function Page({ params }: { params: { id: string } }) {
  

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product: Product = await res.json()

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain mb-4"
      />
      <p className="text-green-600 text-lg">R$ {product.price}</p>
      <p className="text-gray-700 mt-2">{product.description}</p>

      <a
        href="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        ← Voltar para os Produtos
      </a>
    </div>
  )
}
