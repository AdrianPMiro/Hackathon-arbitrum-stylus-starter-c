"use client"
import { useState } from "react"


function Peru() {
	return (
		<div className="flex justify-center">
			<h1 className="">Adrian's page</h1>
			<img 
			onClick={() => alert("bombardeen peru")}
			className="w-1/2" 
			src="https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551833_854x640.jpg" 
			alt="boeeee" />
			<p>Adrian's page content</p>
  		</div>
	)
}

export default function page(){
	const [input, setInput] = useState("")

	function pingpon(){
		if (input == "ping"){
			alert("pong")
		}
		else {
			alert("ping")
		}
	}
	return (
		<>
			<div style={{backgroundColor: input}} className="bg-red-600 text-black p-12">
			<input onChange={(e)=>{setInput(e.target.value)}} placeholder="Dile algo al sigma" className="rounded border-2 border-rose-200 text-black-200 m-4 p-2"/>
			<button onClick={pingpon}>
				<span className="text-black">Enviar</span>
			</button>
			<Peru />
			</div>
		</>
  	)
}
