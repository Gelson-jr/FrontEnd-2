const display = document.querySelector('#display')

const teclado = document.querySelector('.keys')

let entradaAtual = '0'
let valorAnterior = null
let operador = null

teclado.addEventListener('click', (e) => {
    const botao = e.target
    if ( !botao) return

    const digito = botao.dataset.digit
    const operacao = botao.dataset.op
    const acao = botao.dataset.action

    if (digito) {
        inserirDigito(digito)
        return
    }
    if (operacao) {
        // registrarOperacao(operacao)
        return
    }
    if (acao) {
        //executarAcao(acao)
        return
    }
})

const inserirDigito = digito => {
    display.textContent += digito
}