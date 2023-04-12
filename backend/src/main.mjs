import express from "express"
import cors from "cors"

import {
    controladorNovoAutor,
    controladorNovaCita,
    controladorRecuperarAutores,
    controladorRecuperarCitas
} from "./lib/controllers.mjs"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/autores/", controladorNovoAutor)
app.get("/autores/",  controladorRecuperarAutores)

app.post("/citas/", controladorNovaCita)
app.get("/citas/", controladorRecuperarCitas)

app.listen(8000, ()=>{
    console.log("Express traballando...")
})