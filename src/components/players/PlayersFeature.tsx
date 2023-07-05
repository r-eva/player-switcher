import { useContext } from "react"
import { useLocalStorage } from "../../helpers/useLocalStorage"
import UserContext, { UserState } from "../../helpers/store"

const PlayersFeature = () => {
  const [player1Score, setPlayer1Score] = useLocalStorage("player1", "0")
  const [player2Score, setPlayer2Score] = useLocalStorage("player2", "0")
  const player = useContext<UserState>(UserContext)

  const plusButtonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) + 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString())
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
    <>
      <div className="quantity">
        <button className="quantity-button" onClick={minusButonHandler}>
          -
        </button>
        <button className="quantity-button" onClick={plusButtonHandler}>
          +
        </button>
      </div>
      <button className="reset-button" onClick={resetButtonHandler}>
        Reset
      </button>
    </>
  )
}

export default PlayersFeature
