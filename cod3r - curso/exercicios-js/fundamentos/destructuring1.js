const pessoa = {
    nome: 'Leandro',
    idade: 20,
    endereco:{
        logradouro: 'rua jkl',
        numero: 1000
    }
}

const {nome:n, idade:i} = pessoa
console.log(n, i)

const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)