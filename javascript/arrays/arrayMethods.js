const pilotos = ['Vettel', 'LeClerc', 'Raikkonen', 'Stroll']

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Kvyat')
console.log(pilotos)

pilotos.splice(2, 0, 'Massa', 'Bottas')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)