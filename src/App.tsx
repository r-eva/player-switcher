import React, { useState, useEffect } from "react"
import "./App.css"
import Switcher from "./components/switcher/Switcher"
import PlayersData from "./components/players/PlayersData"
import PlayersFeature from "./components/players/PlayersFeature"
import { useLocalStorage } from "./helpers/useLocalStorage"

function App() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)
  const [player1Score, setPlayer1Score] = useLocalStorage("player1", "0")
  const [player2Score, setPlayer2Score] = useLocalStorage("player2", "0")

  useEffect(() => {}, [isFirstPlayer])

  const plusButtonHandler = () => {
    isFirstPlayer
      ? setPlayer1Score((Number(player1Score) + 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString())
  }

  const minusButonHandler = () => {
    isFirstPlayer
      ? setPlayer1Score((Number(player1Score) - 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString())
  }

  const resetButtonHandler = () => {
    isFirstPlayer ? setPlayer1Score("0") : setPlayer2Score("0")
  }

  return (
    <div className="app-container">
      <Switcher
        isFirstPlayer={isFirstPlayer}
        onChange={() => setIsFirstPlayer(!isFirstPlayer)}
      />
      <div className="player-container">
        <div className="player-container player-container__border">
          <PlayersData
            score={player1Score}
            players={isFirstPlayer ? "Players 1" : "Players 2"}
          />
          <PlayersFeature
            buttonMinusHandler={minusButonHandler}
            buttonPlusHandler={plusButtonHandler}
            buttonResetHandler={resetButtonHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default App
