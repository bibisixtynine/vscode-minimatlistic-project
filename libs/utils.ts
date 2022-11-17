export let uneValeur = 10

export class Bot {
    private name: string
    
    constructor(name : string) {
        this.name = name
    }

    sayHello() {
        console.log(`hello ${this.name} !`)
    }

}