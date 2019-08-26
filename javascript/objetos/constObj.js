// pessoa -> 0xC99 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 0xC100 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'João'
console.log(pessoa)