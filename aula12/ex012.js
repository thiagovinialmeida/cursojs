var atual = new Date()
var hora = atual.getHours()

if(hora <= 5){
    console.log('Boa madrugada!')
} else if(hora < 12){
    console.log('Bom dia!')
} else if (hora < 16){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}