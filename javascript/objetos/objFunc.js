const pessoa = {
    nome: 'Leandro',
    idade: 20,
    peso: 54
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log((pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)  
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '12/02/1999'
})
pessoa.dataNascimento = '31/02/1999'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const objFinal = Object.assign(dest, o1, o2)
console.log(Object.values(dest))
console.log(Object.keys(dest))
console.log(Object.entries(dest))