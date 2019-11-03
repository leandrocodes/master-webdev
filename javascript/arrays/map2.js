const carrinho = [
  '{"nome": "Borracha", "preco": 3.5}',
  '{"nome": "Caneta", "preco": 0.5}',
  '{"nome": "Lápis", "preco": 1.5}',
  '{"nome": "Corretivo", "preco": 2.5}',
]

const toObj = json => JSON.parse(json)
const justPrice = product => product.preco

let result = carrinho.map(toObj).map(justPrice)
console.log(result)