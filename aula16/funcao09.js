//função geradora
/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/
//Usando laço While na função geradora
function* contador(){
    let x = 0
    while(true){
        yield x++
    }
}

const itcon = contador()
for(let i = 0;i < 10;i++){
    console.log(itcon.next().value)
}




