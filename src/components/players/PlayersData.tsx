import React, { useContext, useState, useEffect } from "react"
import "./Players.css"
import UserContext, { UserState } from "../../helpers/store"
import { useLocalStorage } from "../../helpers/useLocalStorage"

const PlayersData = () => {
  const player = useContext<UserState>(UserContext)
  const [disableButton, setDisableButton] = useState(true)
  const [player1Score, setPlayer1Score] = useLocalStorage("player1", "0")
  const [player2Score, setPlayer2Score] = useLocalStorage("player2", "0")

  useEffect(() => {
    if (player.isFirstPlayer) {
      player1Score !== "0" ? setDisableButton(false) : setDisableButton(true)
    } else {
      player2Score !== "0" ? setDisableButton(false) : setDisableButton(true)
    }
    console.log("masuk use effect")
  }, [player.isFirstPlayer, player1Score, player2Score])

  const plusButtonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) + 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString())
    setDisableButton(false)
  }

  const minusButonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) - 1).toString())
      : setPlayer2Score((Number(player2Score) - 1).toString())
  }

  const resetButtonHandler = () => {
    player.isFirstPlayer ? setPlayer1Score("0") : setPlayer2Score("0")
  }
  return (
    <div>
      <h1>{player.isFirstPlayer ? "Players 1" : "Players 2"}</h1>
      <h2>{player.isFirstPlayer ? player1Score : player2Score}</h2>
      <div className="quantity">
        <button
          className="quantity-button"
          onClick={minusButonHandler}
          disabled={disableButton}>
          -
        </button>
        <button className="quantity-button" onClick={plusButtonHandler}>
          +
        </button>
      </div>
      <button className="reset-button" onClick={resetButtonHandler}>
        Reset
      </button>
    </div>
  )
}
export default PlayersData
