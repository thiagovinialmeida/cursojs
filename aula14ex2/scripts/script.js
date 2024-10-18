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