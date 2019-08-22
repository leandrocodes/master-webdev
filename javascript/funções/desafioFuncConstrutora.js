function Pessoa(nome) {
    this.falar = () => {
        console.log(`meu nome é ${nome}`)
    }
}

p1 = new Pessoa('leandro')
p1.falar()