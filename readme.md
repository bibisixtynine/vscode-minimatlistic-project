# Un programme Typescript minimaliste avec VSCode

# main.ts : un fichier typescript
function add(a:number, b:number) : number {
    return a+b
}

console.log('helloooooo')
console.log(add(1,33))


# tsconfig.json : le fichier de configuration du compilateur typescript
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "sourceMap": true,
      "outDir": "out"
    }
  }

# .vscode/tasks.json : fichier d'automatisation de compilation
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "typescript",
			"tsconfig": "tsconfig.json",
			"problemMatcher": [
				"$tsc"
			],
			"group": {
				"kind": "build",
				"isDefault": true
			},
			"label": "tsc: build - tsconfig.json"
		}
	]
}

# STEP 1 : compiler (built) ts->js
shift + command + B
Cela produira un répertoire "out", dans lequel seront crées un fichier main.js et un fichier main.js.map qui sont les résultats de la compilation du fichier main.ts