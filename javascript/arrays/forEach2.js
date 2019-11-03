Array.prototype.forEach2 = function(lambda) {
  for(let i = 0; i < this.length; i++){
    lambda(this[i], i, this)
  }
}

const aprovados = ['leandro', 'thiago', 'daniel', 'claudio']

aprovados.forEach2((nome, indice)=>{
  console.log(`${indice+1}) ${nome}`)
})
