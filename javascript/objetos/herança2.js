const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }



console.log(avo, pai, filho)
//procura no avô
console.log(filho.attr1)
//procura no pai
console.log(filho.attr2)
//procura no avo  
console.log(pai.attr1)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log('///')
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
console.log('/// VOLVO ACELERA')
console.log(volvo.status())

ferrari.acelerarMais(220)
console.log('/// FERRARI ACELERA')
console.log(ferrari.status())