const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
})
console.log(filha2.nome)
//não vai mudar
filha2.nome = 'Carla'
console.log(filha2.nome)