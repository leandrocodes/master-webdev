const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const prova1 = 8.8575
const prova2 = 7.882

const total = prova1 * peso1 + prova2 * peso2
const media = total/(peso1 + peso2)

//Seta o número de casas decimais
console.log(media.toFixed(2))
//vira binário
console.log(media.toString(2))
console.log(typeof media)