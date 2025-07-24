


'use client'

import { useEffect, useState } from "react"

type User = {
  id: number,
  title: string,
  image: string,
  price: number,
  description: string

}

export default function ClienteSide() {
  const [users, setUsers] = useState<User[]>([])

  async function fetchUsers() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data: User[] = await response.json()
    setUsers(data)
  }


  useEffect(() => {
    fetchUsers()
  }, [])



  return (
    <div className="flex flex-wrap gap-4 p-2 justify-center">
        {users.map((user) => (
            <div key={user.id}
                className="bg-white rounded-2xl shadow-2xl flex flex-col justify-between w-64 min-h
                ">
                <ul>
                    <img
                    src={user.image}
                    alt="img dos cards"
                    className=" flex-1 h-45 w-full object-contain rounded-lg"/>
                    <li className="flex mb-3 font-bold">{user.title}</li>
                    <li className=" flex mb-3 text-green-500">R${user.price}</li>
                    <li className="flex  text-xs mb-3 text-gray-500">{user.description}</li>
                </ul>
            </div>
        ))}

    </div>
  )
}
