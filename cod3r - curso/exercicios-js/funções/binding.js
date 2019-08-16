const pessoa = {
    saudacao: 'Boa noite',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()


/* Conflito entre OO e Funcional 

    const falar = pessoa.falar
    falar() 
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
