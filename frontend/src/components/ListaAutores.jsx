import { useState } from "react"
import { recuperarAutor } from "../lib/fetch.mjs"

function ListaAutores(  ) {

    const [ autores, setAutores] = useState([])

    function manexadorActualizar() {
        recuperarAutor(manexadorDatos)
    }

    function manexadorDatos(datos) {
        setAutores(datos)
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