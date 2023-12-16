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

  const [diceValues, setDiceValues] = React.useState(() => allNewDice())
  const dieElements = diceValues.map((value, index) => <Die key={index} value={value} />)

  return (
    <main>
      <div className="die-container">
        {dieElements}
      </div>
    </main>
  )
}

