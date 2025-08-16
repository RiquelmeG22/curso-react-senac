import FormularioUser from "@/components/formularioUser";

export default async function Update({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${id}`)
    const dados = await response.json();
    console.log(dados)


    return (
        <div>
            < FormularioUser id={dados.id} name={dados.name} email={dados.email}/>
        </div>
    )
}