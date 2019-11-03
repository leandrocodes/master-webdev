const products = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Papel Sulfite', preco: 15, fragil: false},
]

const frageis = p => p.frageis != false
const caros = p => p.preco > 2500

console.table(products.filter( p => {
  return (p.preco > 2500)
}))
console.log(`////`)

console.table(products.filter(frageis))
console.log(`////`)
console.table(products.filter(caros))