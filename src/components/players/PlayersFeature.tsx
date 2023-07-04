import React from "react"
import PlayersInterface from "../../models/PlayersInterface"

const PlayersFeature: React.FC<PlayersInterface> = ({
  buttonMinusHandler,
  buttonPlusHandler,
  buttonResetHandler,
}) => {
  return (
    <>
      <div className="quantity">
        <button className="quantity-button" onClick={buttonMinusHandler}>
          -
        </button>
        <button className="quantity-button" onClick={buttonPlusHandler}>
          +
        </button>
      </div>
      <button className="reset-button" onClick={buttonResetHandler}>
        Reset
      </button>
    </>
  )
}

export default PlayersFeature
