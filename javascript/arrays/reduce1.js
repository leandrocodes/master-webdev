const alunos = [
  {nome: `Jão`, nota: 7.3, bolsista: false},
  {nome: `Maria`, nota: 9.3, bolsista: true},
  {nome: `Fernando`, nota: 1.3, bolsista: false},
  {nome: `Julia`, nota: 9.5, bolsista: true},
]

const result = alunos.map(a => a.nota).reduce((acumulador, atual) => {
  console.log(acumulador, atual)
  return acumulador + atual
}, 10)

console.log(result)