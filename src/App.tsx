import React, { useState } from "react"
import "./App.css"
import Switcher from "./components/switcher/Switcher"
import PlayersData from "./components/players/PlayersData"
import PlayersFeature from "./components/players/PlayersFeature"
import { useLocalStorage } from "./helpers/useLocalStorage"
import UserContext, { UserState } from "./helpers/store"

function App() {
  const [player, setPlayer] = useState<UserState>({
    isFirstPlayer: true,
  })

  const [player1Score, setPlayer1Score] = useLocalStorage("player1", "0")
  const [player2Score, setPlayer2Score] = useLocalStorage("player2", "0")

  const plusButtonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) + 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString())
  }

  const minusButonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) - 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString())
  }

  const resetButtonHandler = () => {
    player.isFirstPlayer ? setPlayer1Score("0") : setPlayer2Score("0")
  }

  return (
    <UserContext.Provider value={player}>
      <div className="app-container">
        <Switcher
          onChange={() =>
            setPlayer({
              isFirstPlayer: !player.isFirstPlayer,
            })
          }
        />
        <div className="player-container">
          <div className="player-container player-container__border">
            <PlayersData
              score={player.isFirstPlayer ? player1Score : player2Score}
              players={player.isFirstPlayer ? "Players 1" : "Players 2"}
            />
            <PlayersFeature
              buttonMinusHandler={minusButonHandler}
              buttonPlusHandler={plusButtonHandler}
              buttonResetHandler={resetButtonHandler}
            />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
