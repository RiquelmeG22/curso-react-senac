import db from '@/app/api/database'
import { request } from 'http';

export async function GET(request: Request) {
  try {
    const [rows] = await db.query("SELECT * FROM users")
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ erro: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" } 
    });
  }
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const [result] = await db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

export async function PUT(request: Request) {
  
  const { id, nome, email } = await request.json();

  if (!id) {
    return new Response(JSON.stringify({ erro: "ID é obrigatório para editar" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const [result] = await db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [nome, email, id]
  );

  return new Response(JSON.stringify({ valor: true }), {
   
  });
}


export async function DELETE(request: Request) {
 
    const {id} = await request.json();
    await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return Response.json({sucesso: true})
}


