// usando a forma literal
const obj1 = {}
console.log(obj1)

//object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 2.00, 0.05)
const p2 = new Produto('Notebook', 2500, 0.05)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Leandro', 400, 3)
const f2 = criarFuncionario('Jonatan', 14000, 6)
console.log(f1.getSalario(), f2.getSalario())
