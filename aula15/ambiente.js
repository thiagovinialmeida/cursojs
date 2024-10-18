let num = [11, 2 ,33 ,8 ,5]
num.push(9)
num.sort((a ,b) => a - b)

console.log(num)
console.log(`O array num tem ${num.length} posições`)
console.log(`O primeiro valor de num é ${num[0]}`)

let pos = num.indexOf(33)

if(pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 33 está na ${pos} posição`)
}