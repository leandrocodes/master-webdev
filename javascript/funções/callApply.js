function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome: 'notebook',
    preco: 4589, 
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = { preco: 60000, desc: 0.10}

//call e call contexto
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.20, '$'))

//apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.20, '$']))