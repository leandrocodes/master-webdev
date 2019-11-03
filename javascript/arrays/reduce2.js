const alunos = [
  {nome: `Jão`, nota: 7.3, bolsista: false},
  {nome: `Maria`, nota: 9.3, bolsista: true},
  {nome: `Fernando`, nota: 1.3, bolsista: false},
  {nome: `Julia`, nota: 9.5, bolsista: true},
]

const bolsistas = e => e.bolsista

const todosBolsitas = (prev, next) => prev && next //todos os alunos sao bolsistas?
const algumBolsista = (prev, next) => prev || next //algum aluno é bolsista?
console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas))
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))