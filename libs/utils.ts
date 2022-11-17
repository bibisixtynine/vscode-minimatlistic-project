export { Bot, uneValeur }

let uneValeur = 10

class Bot {
    private name: string
    
    constructor(name : string) {
        this.name = name
    }

    sayHello(): void {
        console.log(`helli ${this.name} !`)
    }

}