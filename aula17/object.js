let amigo = {
    nome: 'Fernando',
    sexo: 'Masculino',
    idade: 19,
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)