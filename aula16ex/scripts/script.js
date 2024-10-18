/*
function gerar(){
    const restab = document.querySelector('#itab')
    let num = Number(document.querySelector('#intab').value)

    if(num != 0){
        restab.innerHTML = ''
    for(let tabuada = 1;tabuada <= 10;){
        mult = num * tabuada
        let opti = document.createElement('option')
        opti.text = `${num} x ${tabuada} = ${mult}`
        restab.appendChild(opti)
        console.log(`${num} x ${tabuada} = ${mult}`)
        tabuada++
    }} else{
        alert('Por favor, digite um número.')
    }
}
}*/

let selecao = []

function adicionar(){
    let numeroadd = Number(document.querySelector('#inum').value)
    let selecnum = document.querySelector('#inumsect')

    let opcao = document.createElement('option')
    selecnum.appendChild(opcao)

    selecao.push(numeroadd)
    opcao.text = `Valor ${selecao} adcionado.`
}

function finalizar(){
    const result = document.querySelector('#res')
    
    selecao.soft((a, b) => a - b)
    let total = selecao.length 
    let maior = selecao.pop
    let menor = selecao[0]


    for(let indice = selecao.leght;indice > 0; indice--){
        let soma = 0
        let total = soma + selecao[indice]
    }


    result.innerHTML = `Ao todo, temos ${total} números cadastrados`
    result.innerHTML = `O maior valor informado foi ${maior}`
    result.innerHTML = `O menor valor informado foi ${menor}`
    result.innerHTML = `Somando todos os valores, temos ${x}`
    result.innerHTML = `A média dos valores digitados é ${x}`
}