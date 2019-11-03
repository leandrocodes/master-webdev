const products = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Papel Sulfite', preco: 15, fragil: false},
]

console.log(products.filter( p => {
  return (p.preco > 2500)
}))