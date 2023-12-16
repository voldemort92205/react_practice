import React from "react"
import Die from "./Die"

export default function App() {
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}
console.log(allNewDice())

  return (
    <main>
      <div className="die-container">
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={6}/>
      </div>
    </main>
  )
}

