function carregar(){
var atual = new Date()
var hora = atual.getHours()
var img = window.document.getElementById('imagem')
var sec = window.document.getElementById('bloco')
var x = window.document.getElementById('horas')

x.innerHTML = hora
    
if(hora >= 0 && hora <=5){
    //noite
    img.src = 'imagens/Noite.jpg'
    sec.style.background = '#343453'
} else if(hora <= 12){
    //manhã
    img.src = 'imagens/Manha.jpg'
    sec.style.background = '#f7c863'
} else if(hora > 12 && hora <= 18){
    //Tarde
    img.src = 'imagens/Tarde.jpg'
    sec.style.background = '#a53a19'
} else {
    //Noite
    img.src = 'imagens/Noite.jpg'
    sec.style.background = '#343453'
}
}

/* 
if(hora <= 5){
    console.log('Boa madrugada!')
} else if(hora < 12){
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
*/