const aprovados = ['leandro', 'thiago', 'daniel', 'claudio']

aprovados.forEach( (nome, indice)=>{
  console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach( nome=> console.log(nome))

console.log(`//`)

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)