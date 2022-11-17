import { welcomeMessage, Bot } from "../libs/utils"

console.log(welcomeMessage)

let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1, 2, 3]
let f: any[] = [1, true, 'a', false]
let g: Array<string> = ['b', 'c']

enum Color { Red = 0, Green = 1, Blue = 2 }
let backgroundColor = Color.Red

function add(a: number, b: number): number {
  return a + b
}
console.log(add(12, 0))

let aBot = new Bot('Roberto')
console.log(aBot.name)
aBot.name = 'riki'
aBot.sayHello()

interface User {
  name: String
  id: number
}

class UserAccount {
  name: string
  id: number
  age: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}
const user: User = new UserAccount("Murphy", 12)
console.log(user.name)

type MyBool = true | false

type WindowStates = "open" | "closed" | "minimized"
let myWindowState: WindowStates = "minimized"

function getLength(obj: string | string[]) {
  return obj.length;
}

console.log(`getLength('ab') = ${getLength('ab')}`)
console.log(`getLength(['a',2,3]) = ${getLength(['a', 'b', 'c'])}`)

interface Point {
  x: number
  y: number
}

let logPoint = (point: Point) => {
  console.log(`(x,y) = (${point.x},${point.y})`)
}

logPoint({ x: 10, y: 20 })

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

interface Pointlike {
  x: number;
  y: number;
}
interface Named {
  name: string;
}

function logName(x: Named) {
  console.log("Hello, " + x.name);
}

const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};

logPoint(obj);
logName(obj);

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());