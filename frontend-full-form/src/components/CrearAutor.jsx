import { deFormDataAobjeto } from "../lib/forms.mjs"
import { enviarNovoAutor } from "../lib/fetch.mjs"
import { useRef } from "react"

function CrearAutor() {

    const formulario = useRef()

    function manexadorEnviar(evento) {
        evento.preventDefault()
        const formData = new FormData(evento.target)
        const datosJSON = deFormDataAobjeto(formData)
        enviarNovoAutor(datosJSON, manexadorResposta)
    }

    function manexadorResposta(resposta) {
        if (resposta.ok) {
            formulario.current.reset()
            alert("Ok!")
        } else {
            alert("Ups... algo muy malo ha sucedido")
        }
    }
    
    return(
        <form ref={formulario} method="" onSubmit={manexadorEnviar}>
            <h2>Crea un autor</h2>
            <label>
                Nome
                <input name="nome" type="text"/>
            </label>
            <label>
                Nacemento
                <input name="nacemento" type="date"/>
            </label>
            <label>
                Falecemento
                <input name="falecemento" type="date"/>
            </label>
            <label>
                Ficcion
                <input name="ficcion" type="checkbox"/>
            </label>
            <fieldset>
                <legend>Xenero</legend>
                <label>
                    <input name="xenero" type="radio" value="home"/>
                    Home
                </label>
                <label>
                    <input name="xenero" type="radio" value="muller"/>
                    Muller
                </label>
                <label>
                    <input name="xenero" type="radio" value="outro"/>
                    Outro
                </label>
            </fieldset>
            <button>Enviar</button>
        </form>
    )
}

export default CrearAutor