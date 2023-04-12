import { useState } from "react"
import { recuperarAutor } from "../lib/fetch.mjs"

function ListaAutores(  ) {

    const [ autores, setAutores] = useState([])

    function manexadorActualizar() {
        recuperarAutor(manexadorResposta)
    }

    async function manexadorResposta(resposta) {
        if (resposta.ok) {
            const datos = await resposta.json()
            setAutores(datos)
        } else {
            alert("Uuups! Non poidemos recuperar a lista de autores. Intentao de novo.")
        }
    }

    return (
        <section>
            <h2>Lista de autores</h2>
            <button onClick={manexadorActualizar}>Actualizar</button>
            {autores.map( autor => <p>{autor.nome}</p> )}
        </section>
    )
}

export default ListaAutores