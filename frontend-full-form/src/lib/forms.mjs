function deFormDataAobjeto(formData){
    const datosObjeto = {}
    for ( const esteDato of formData.keys() ) {
        const arrayDeDatos = formData.getAll(esteDato)
        datosObjeto[esteDato] = arrayDeDatos.length > 1 ? arrayDeDatos : arrayDeDatos[0]
    }
    return datosObjeto
}

export {
    deFormDataAobjeto
}