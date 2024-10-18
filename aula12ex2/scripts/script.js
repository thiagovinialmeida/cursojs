function verificar() {
var atual = new Date()
var anoAtual = atual.getFullYear()
var dados = document.getElementById('res')
var nascimento = document.getElementById('inasc')
var nas = Number(nascimento.value)
var idade = anoAtual - nas



if(nas == 0 || nas > anoAtual){
    window.alert('[ERRO] Verifique se os dados foram devidamente preenchidos!')

} else {
    var sexo = document.getElementsByName('sexo')
    var idade = anoAtual - nas
    var genero = '' 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(sexo[0].checked){
        genero = 'Homem'

        if(idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/crianca-m.jpg')
        } else if(idade > 10 && idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovem-m.jpg')
        } else if(idade <= 50){
            //adulto
            img.setAttribute('src', 'imagens/adulto-m.jpg')
        } else {
            //Idoso
            img.setAttribute('src', 'imagens/idoso-m.jpg')
        }

    } else if(sexo[1].checked){
        genero = 'Mulher'

        if(idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/crianca-f.jpg')
        } else if(idade > 10 && idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovem-f.jpg')
        } else if(idade <= 50){
            //adulta
            img.setAttribute('src', 'imagens/adulto-f.jpg')
        } else {
            //Idosa
            img.setAttribute('src', 'imagens/idoso-f.jpg')
        }

    }
    dados.style.textAlign = 'center'
    dados.innerHTML = `<P>Você possui ${idade} anos de idade e é: ${genero}</p>`
    dados.appendChild(img) 
}}