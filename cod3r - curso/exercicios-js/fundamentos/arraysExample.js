const valores = [7, 15, 20, 33, 22]

console.log(valores[1], valores[0])
console.log(valores[40])

valores[5] = 12

console.log(valores)
console.log(valores.length)

valores.push({id: 15}, 299, 0.5)
console.log(valores)

console.log(valores.push())
delete valores[2]
console.log(valores)

console.log(typeof valores)