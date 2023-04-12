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

async function recuperarAutor(manexadorResposta=()=>{}) {
    try {
        const resposta = await fetch(baseUrl+rutaAPIAutores)
        manexadorResposta(resposta)
    } catch (excepcion) {
        manexadorExcepcions(excepcion)
    }
}

export {
    enviarNovoAutor,
    recuperarAutor
}