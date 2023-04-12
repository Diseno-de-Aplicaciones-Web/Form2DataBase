import { Autor, Cita } from "./db.mjs"
import errorHandler from "./errorHandler.mjs"

async function controladorNovoAutor(peticion, resposta) {
    try {
        const novoAutor = await Autor.create(peticion.body)
        resposta.status(201).send(novoAutor.toJSON())
    } catch (error) {
        errorHandler(error, resposta)
    }
}

async function controladorRecuperarAutores(_, resposta) {
    try {
        resposta.json(await Autor.findAll())
    } catch (error) {
        errorHandler(error, resposta)
    }
}

async function controladorNovaCita(peticion, resposta) {
    try {
        const novaCita = await Cita.create(peticion.body)
        resposta.status(201).send(novaCita.toJSON())
    } catch (error) {
        errorHandler(error, resposta)
    }
}

async function controladorRecuperarCitas(_, resposta) {
    try {
        resposta.json(await Autor.findAll())
    } catch (error) {
        errorHandler(error, resposta)
    }
}

export {
    controladorNovoAutor,
    controladorRecuperarAutores,
    controladorNovaCita,
    controladorRecuperarCitas
}


