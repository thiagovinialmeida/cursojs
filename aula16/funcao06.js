/*function soma(...valores){
    let tam=valores.length
    let res=0

    for(let i = 0;i < tam ;i++){
        res += valores[i]
    }
    return res
}

console.log(soma(100,12,5,1,23))*/

function soma(...valores){
    let tam=valores.length
    let res=0

    for(let v of valores){
        res += v
    }
    return res
}

console.log(soma(100,12,5,1,23))