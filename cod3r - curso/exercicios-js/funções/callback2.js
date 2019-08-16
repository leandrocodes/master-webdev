const notas = [7.7, 6.5, 9.9, 5.2, 3.3, 4.4, 10, 8.7]

let notasBaixas = []
for(i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

const menorQ7 = nota=> nota<7
let notasBaixas2 = notas.filter(menorQ7)
console.log(notasBaixas2)