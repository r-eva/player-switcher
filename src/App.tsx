import React, { useState } from "react"
import "./App.css"
import Switcher from "./components/switcher/Switcher"
import Players from "./components/players/PlayersData"
import PlayersData from "./models/Players"
import PlayersFeature from "./components/players/PlayersFeature"

function App() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)
  const [playersData, setPlayersData] = useState<PlayersData>(
    new PlayersData("Players 1", 0)
  )

  const plusButtonHandler = () => {
    const newPlayersData = new PlayersData(
      playersData.name,
      playersData.score + 1
    )
    setPlayersData(newPlayersData)
  }

  const minusButonHandler = () => {
    const newPlayersData = new PlayersData(
      playersData.name,
      playersData.score - 1
    )
    setPlayersData(newPlayersData)
  }

  const resetButtonHandler = () => {
    const resetPlayersData = new PlayersData(playersData.name, 0)
    setPlayersData(resetPlayersData)
  }

  return (
    <div className="app-container">
      <Switcher
        isFirstPlayer={isFirstPlayer}
        onChange={() => setIsFirstPlayer(!isFirstPlayer)}
      />
      <div className="player-container">
        <div className="player-container player-container__border">
          <Players name={playersData.name} score={playersData.score} />
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
