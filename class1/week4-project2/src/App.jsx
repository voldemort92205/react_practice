import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App() {
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        })
    }
    return newDice
  }

  const [dice, setDice] = React.useState(() => allNewDice())
  const dieElements = dice.map((item) => <Die
            key={item.id}
            value={item.value}
            isHeld={item.isHeld}
            holdDice={() => holdDice (item.id)} />)

  function rollDice() {
    const newDices = allNewDice().map((item, index) => ({
      ...item,
      isHeld: dice[index].isHeld
    }))
    setDice (newDices)
  }

  function holdDice(id) {
    console.log(id + " triggerred!!")
  }

  return (
    <main>
      <div className="die-container">
        {dieElements}
      </div>
      <button
          className="die-reroller"
          onClick={rollDice}>
        Roll
      </button>
    </main>
  )
}

