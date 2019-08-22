function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([100, 40]))
console.log(rand([, 40]))
console.log(rand([420]))
console.log(rand([]))