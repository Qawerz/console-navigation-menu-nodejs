var stdin = process.stdin
stdin.setRawMode(true)
stdin.resume()
const readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})
stdin.setEncoding("utf-8")
var flag = true
const menu = [
	{
		text: "HW",
		func() {
			console.log("Hello, World!")
			process.exit(0)
		},
	},
	{
		text: "print(v)",
		func() {
			flag = false
			rl.question("Input value:", function (v) {
				console.clear()
				console.log(`print func - ${v}`)
				process.exit(0)
			})
		},
	},
]
var v = 0

function draw() {
	console.clear()
	console.log(`Use "<" and ">" for navigation, "m" to Enter \n`)
	for (var i = 0; i < menu.length; i++) {
		if (v == i) {
			console.log(`>${menu[i].text}`)
		} else {
			console.log(`${menu[i].text}`)
		}
	}
}
draw()
stdin.on("data", function (key) {
	if (flag == true) {
		if (key == "\u0003") {
			process.exit()
		}
		if (key === "," || key == "б") {
			if (v > 0) {
				v--
			}
		}
		if (key === "." || key == "ю") {
			if (v < menu.length - 1) {
				v++
			}
		}
		console.clear()
		draw()
		if (key === "ь" || key == "m") {
			menu[v].func()
		}
	}
})
