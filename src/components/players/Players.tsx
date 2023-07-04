import React from "react"

interface PlayersData {
  name: string
  score: number
}

const Players = (props: PlayersData) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.score}</p>
    </div>
  )
}
export default Players
