const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur,'(evento) => { validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorDeIdade(dataRecebida)){
    mensagem = 'Você deve ter mais de 18 anos para se cadastrar'
}
    input.setCustomValidity(mensagem)
}

function maiorDeIdade(data) {
    const dataAtual = new Date()
    const dataMaiorIdade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMaiorIdade <= dataAtual
}