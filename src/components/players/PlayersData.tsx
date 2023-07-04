import React from "react"
import "./Players.css"
import Players from "../../models/Players"

const PlayersData: React.FC<Players> = ({ players, score }) => {
  return (
    <div>
      <h1>{players}</h1>
      <h2>score: {score}</h2>
    </div>
  )
}
export default PlayersData
