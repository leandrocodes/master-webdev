const a = 1
const b = 2
const c = 3

const obj2 = {a, b, c}
console.log(obj2)


const nomeAttr = 'nota'
const valorAttr = 9.9

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        /// ...
    },
    funcao2(){
        /// ...
    }
}
console.log(obj5)