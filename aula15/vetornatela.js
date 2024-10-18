let valores = [8, 9, 5, 2, 4, 6, 10, 42, 402, 24, 56, 10]
valores.sort((a,b) => a - b)
/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}