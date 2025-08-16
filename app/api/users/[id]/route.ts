
import { headers } from "next/headers";
import db from "../../database"

export  async function GET(request: Request, {params} : {params: {id: string}}) {
    const {id} = params;

    const [rows] = await db.query<any>("SELECT * FROM users where id = ?", [id])

    return new Response(JSON.stringify(rows[0]), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}

    });

}   


