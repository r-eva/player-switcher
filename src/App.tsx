import React, { useState } from "react"
import "./App.css"
import Switcher from "./components/switcher/Switcher"

function App() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)

  console.log("isFirstPlayer:", isFirstPlayer)

  return (
    <div className="base-layout">
      <Switcher
        isFirstPlayer={isFirstPlayer}
        onChange={() => setIsFirstPlayer(!isFirstPlayer)}
      />

      <h1>Hello Word</h1>
    </div>
  )
}

export default App
