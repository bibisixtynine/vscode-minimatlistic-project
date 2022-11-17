export { Bot, uneValeur }

let uneValeur = 10

class Bot {
    private name: string
    
    constructor(name : string) {
        this.name = name
    }

    public sayHello(): void {
        console.log(`hello ${this.name} !`)
    }

    public get nom() {
        return this.name
    }

    
    public set nom(v : string) {
        this.name = v;
    }
    
}