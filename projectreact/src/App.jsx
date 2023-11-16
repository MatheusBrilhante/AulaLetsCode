import Bot from "./components/Bot"
import Teste from "./components/Teste"
import { useState } from "react"

function App() {

  let contador = 0

  function Aumentar(){
    contador ++
    console.log('O VALOR E ', contador)
  }
  
  return (
    <div>
      <h1>Ola, mundo React ! </h1>
      <h3>{contador}</h3>
      <button onClick={Aumentar}>Aumentar</button>
      <Teste />
      <Bot />

    </div>

  )
} 
export default App