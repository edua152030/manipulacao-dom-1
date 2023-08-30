const btnInc = document.getElementById('inc')
const btnDec = document.getElementById('dec')
const pAlterado = document.getElementById('count')

let contador = 0

function incrementar() {
    contador++
    alterarP()
}

function zerar() {
    contador = contador
    pAlterado.textContent = ''
}

function alterarP(){
    pAlterado.textContent = `O contador está com ${contador} cliques`
}


