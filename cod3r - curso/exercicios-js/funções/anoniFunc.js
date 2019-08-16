const soma = function(x, y){
    return x+y
}

const chamaResult = function(a, b, opr = soma){
    console.log(opr(a, b))
}

chamaResult(3, 4)
chamaResult(3, 4, soma)
chamaResult(3, 4, function(x, y){
    return x-y
})

const pessoa = {
    falar: function(){
        console.log('opa')
    }
}

pessoa.falar()