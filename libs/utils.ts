export { Bot, welcomeMessage }

let welcomeMessage: string = 'Welcome to the world of Typescript'

class Bot {
    private id: string
    
    constructor(name : string) {
        this.id = name
    }

    public sayHello(): void {
        console.log(`hello ${this.id} !`)
    }

    public get name() {
        return this.id
    }

    
    public set name(v : string) {
        this.id = v;
    }
    
}