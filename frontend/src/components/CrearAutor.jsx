import { useState } from "react"
import { enviarNovoAutor } from "../lib/fetch.mjs"

function CrearAutor() {

    const [ nome, setNome ] = useState("")
    const [ nacemento, setNacemento ] = useState("")
    const [ falecemento, setFalecemento ] = useState("")
    const [ ficcion, setFiccion ] = useState(false)
    const [ xenero, setXenero ] = useState("")

    function manexadorEnviar() {
        enviarNovoAutor(
            { nome, nacemento, falecemento, ficcion, xenero },
            manexadorResposta
        )
    }

    function manexadorResposta(resposta) {
        console.log(resposta);
    }
    
    return(
        <>
            <h2>Crea un autor</h2>
            <label>
                Nome
                <input type="text" value={nome} onInput={(evento)=>{setNome(evento.target.value)}}/>
            </label>
            <label>
                Nacemento
                <input type="date" value={nacemento} onInput={(evento)=>{setNacemento(evento.target.value)}}/>
            </label>
            <label>
                Falecemento
                <input type="date" value={falecemento} onInput={(evento)=>{setFalecemento(evento.target.value)}}/>
            </label>
            <label>
                Ficcion
                <input type="checkbox" value={ficcion} onInput={(evento)=>{setFiccion(evento.target.checked)}}/>
            </label>
            <fieldset>
                <legend>Xenero</legend>
                <label>
                    <input type="radio" name="xenero" onInput={(evento)=>{setXenero("home")}}/>
                    Home
                </label>
                <label>
                    <input type="radio" name="xenero" onInput={(evento)=>{setXenero("muller")}}/>
                    Muller
                </label>
                <label>
                    <input type="radio" name="xenero" onInput={(evento)=>{setXenero("outro")}}/>
                    Outro
                </label>
            </fieldset>
            <button onClick={manexadorEnviar}>Enviar</button>
        </>
    )
}

export default CrearAutor