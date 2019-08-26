/// es6 sintaxe
class PersonClass{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`My name is ${this.name}`)
    }
}
p1 = new PersonClass('Leandro')
p1.speak()
/// caindo em desuso
function PersonConstructor(name) {
    this.speak = () => {
        console.log(`My name is ${name}`)
    }
}
const p2 = new PersonConstructor('Tainá')
p2.speak()
/// re
const PersonFactory = name =>{
    return{
        speak: () => console.log(`My name is ${name}`)
    }
}
const p3 = PersonFactory('Leandro')
p3.speak()
