import { rutaAPIAutores } from "./config.mjs"
import manexadorExcepcions from "./manejadorExcepciones.mjs"

const baseUrl = window.location.hostname === "localhost" ? "http://localhost:8000" : ""

async function enviarNovoAutor(autor, manexadorResposta=()=>{}) {
    try {
        const autorJSON = JSON.stringify(autor)
        const resposta = await fetch(
            baseUrl+rutaAPIAutores,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: autorJSON
            }
        )
        manexadorResposta(resposta)
    } catch (excepcion) {
        manexadorExcepcions(excepcion)
    }
}

async function recuperarAutor(manexadorDatos=()=>{}) {
    try {
        const resposta = await fetch(baseUrl+rutaAPIAutores)
        if (resposta.ok) {
            const datos = await resposta.json()
            manexadorDatos(datos)
        } else {
            alert("Uuups! Non poidemos recuperar a lista de autores. Intentao de novo.")
        }
    } catch (excepcion) {
        manexadorExcepcions(excepcion)
    }
}

export {
    enviarNovoAutor,
    recuperarAutor
}