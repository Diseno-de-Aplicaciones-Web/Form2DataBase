function errorHandler (error, resposta) {
    console.error(error)
    resposta.status(500).send()
}

export default errorHandler