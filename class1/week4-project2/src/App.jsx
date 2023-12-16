import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App() {
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
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
    setDice (oldDice => oldDice.map((item => {
      return item.isHeld ? item: generateNewDie()
    })))
  }

  function holdDice(id) {
    setDice (oldDices => oldDices.map(item => ({
      ...item,
      isHeld: (item.id === id) ? !item.isHeld : item.isHeld
    })))
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same.
        Click each die to freeze it at its
        current value between rolls.
      </p>
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

