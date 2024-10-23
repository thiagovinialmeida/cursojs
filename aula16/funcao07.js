//const f = function(n1,n2){return n1 + n2}
//console.log(f(10,5))

//Funçao Construtor Anônima
const fun = new Function('v1', 'v2','v3', 'return v1+v2+v3')
console.log(fun(10,5,15))


// Função com parametro rest
const f = function(...val){
    let res = 0
    for(x of val){
        res += x
    }
    return res
}

console.log(f(10,10))