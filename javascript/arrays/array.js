console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Leandro'
aprovados.push('Tainá')
console.log(aprovados.length)

aprovados[9] = 'Daniel'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)
console.table(aprovados)
console.log(aprovados.length)