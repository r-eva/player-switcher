import React, { useState } from "react"
import "./App.css"
import Switcher from "./components/switcher/Switcher"
import PlayersData from "./components/players/PlayersData"
import UserContext, { UserState } from "./helpers/store"

function App() {
  const [player, setPlayer] = useState<UserState>({
    isFirstPlayer: true,
  })
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
            <PlayersData />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
