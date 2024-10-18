function contar(){
    const contagem = document.querySelector('#res')
    let inicio = Number(document.querySelector('#ifirst').value)
    let fim = Number(document.querySelector('#iend').value)
    let passos = Number(document.querySelector('#ipasso').value) 

    if(fim == 0){
        alert('Adcione um fim mais longo')
    } else if(passos <= 0){
        alert('Não é possivel dar 0 passos, será substituido por 1')
        passos = 1
    }

    contagem.innerHTML = 'Contando: <br>'
    for(inicio;inicio <= fim;inicio += passos){
        contagem.style.textAlign = 'center'
        contagem.innerHTML += `Passo ${inicio} \u{1F449} `
        console.log(inicio)
    }
    contagem.innerHTML += `\u{1F3C1}`
}