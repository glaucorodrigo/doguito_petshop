export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
    } else{
        input.parentElement.classList.add('input-container--invalido')
    }

}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

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