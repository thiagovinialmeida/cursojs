let selecao = [5, 2, 5, 1]
let soma = 0

for(let indice = 0;indice < selecao.length;    indice++){

    soma += selecao[indice]


}

console.log(soma)function adicionar(){
    if(isNumero(numeroadd) && !inLista(selecnum)){
        
    }

    let opcao = document.createElement('option')
    selecnum.appendChild(opcao)

    selecao.push(numeroadd)
    opcao.text = `Valor ${selecao.pop()} adcionado.`
}

//Descrição da seleção
function finalizar(){

//maior número e menor
//    selecao.sort((a, b) => a - b)
//    let maior = selecao.pop()
//    let menor = selecao[0]

// Soma dos valores
    let soma = 0
    for(let indice = 0;indice < selecao.length;indice++){
        soma += selecao[indice]
        console.log(soma)
    }

//médias
//    let x = selecao.length
//    let media = soma/x

//resultados
    result.innerHTML = `Somando todos os valores, temos ${soma}`

    /*
    result.innerHTML = `Ao todo, temos ${selecao.length} números cadastrados`
    result.innerHTML = `O maior valor informado foi ${maior}`
    result.innerHTML = `O menor valor informado foi ${menor}`
    result.innerHTML = `Somando todos os valores, temos ${soma}`
    result.innerHTML = `A média dos valores digitados é ${media}`*/
}