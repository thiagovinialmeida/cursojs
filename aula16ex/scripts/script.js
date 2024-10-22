const selecnum = document.querySelector('#inumsect')
const result = document.querySelector('#res')
let numeroadd = document.querySelector('#inum')
const selecao = []

function adicionar(){
    if(isRegra(numeroadd.value) && !inList(numeroadd.value, selecao)){
        selecao.push(Number(numeroadd.value))
        let opcao = document.createElement('option')
        opcao.text = `Valor ${Number(numeroadd.value)} adcionado.`
        selecnum.appendChild(opcao)
    } else {
        alert('O número informado não atende as especificações ou já está na lista')
    }
    numeroadd.value = ''
    numeroadd.focus()
}

function isRegra(z){
    if(Number(z) >= 1 && Number(z) <= 100){
        return true
    }else{
        return false
    }
}

function inList(x, y){
    if(y.indexOf(Number(x)) != -1){
        return true
    }else{
        return false
    }
}

function finalizar(){

//maior número e menor
    let maior = selecao[0]
    let menor = selecao[0]

    for(let pos in selecao){
        if(selecao[pos] > maior){
            maior = selecao[pos]
        }
        if(selecao[pos] < menor){
            menor = selecao[pos]
        }
    }

// Soma dos valores
let soma = 0
for(let indice = 0;indice < selecao.length;indice++){
    soma += selecao[indice]
    console.log(soma)
}

//médias
    let x = selecao.length
    let media = soma/x

//resultados
    result.innerHTML = ''
    result.innerHTML += `<p>Ao todo, temos ${selecao.length} números cadastrados</p>`
    result.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    result.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    result.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    result.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}