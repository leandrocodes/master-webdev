let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)


//boolean as number
isAtivo = 1
console.log(!!isAtivo)


console.log('os verdadeiros')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)


let nome = 'Lucas'

//se for vazio, vai imprimir 'Desconhecido'

console.log(nome || 'Desconhecido')