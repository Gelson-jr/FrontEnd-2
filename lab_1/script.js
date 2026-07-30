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
        atualizarDisplay(entradaAtual)
        return
    }
    if (operacao) {
        registrarOperacao(operacao)
        return
    }
    if (acao) {
        executarAcao(acao)
        return
    }
})

const registrarOperacao = (operacao) =>{
    if (operacao === 'raiz' || operacao === 'porcento') {
        calcularUnaria(operacao)
        return
    }

    calcularBinaria(operacao)
    return

}

const calcularBinaria = (op) => {
    valorAnterior = Number(entradaAtual)
    operador = op
    entradaAtual = "0"
}

const executarAcao = (acao) => {
    switch(acao){
        case 'clear':
            limparTudo()
            break
        case 'backspace':
            limparum()
            break
        case 'sing':
            break
        case 'equals':
            break


        
    }
}

const limparTudo = () => {
    entradaAtual = '0'
    valorAnterior = null
    operador = null
    atualizarDisplay(entradaAtual)
    
}

const limparum = () => {
    if (entradaAtual.length === 1){
        entradaAtual = '0'
    }else {
        entradaAtual = entradaAtual.slice(0, -1)
    }
    atualizarDisplay(entradaAtual)
}

const trocaSinal = () =>{

}

const inserirDigito = digito => {

    if (digito === "." && entradaAtual.includes('.')) return
    
    if (entradaAtual === '0'){
        entradaAtual = digito
    return
    }

    entradaAtual += digito
}

const atualizarDisplay = (entrada) => {
    display.textContent = entrada
}