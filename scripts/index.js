import * as wasm from "../pkg/music_mercenary.js";
import * as main from "./main.js";

let wasmMemoryObj;

export function wasmMemory(){
	return wasmMemoryObj; // TODO what if not loaded
}

let welcomeMessage = document.createElement("h2");
welcomeMessage.innerHTML = "Press Enter to start";
document.getElementById("screen").appendChild(welcomeMessage);

async function start(){
	window.removeEventListener("keydown", start);
	document.getElementById("screen").removeChild(welcomeMessage);
	
	let wasmObj = await wasm.default();
	wasmMemoryObj = wasmObj.memory;
	main.run();
}

window.addEventListener("keydown", start);