import React from "react"
import PlayersData from "../../models/Players"
import "./Players.css"

const Players: React.FC<PlayersData> = ({ name, score }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>score: {score}</h2>
    </div>
  )
}
export default Players
