import React, { useContext } from "react"
import "./Switcher.css"
import UserContext, { UserState } from "../../helpers/store"

const Switcher = (props: { onChange: () => void }) => {
  const player = useContext<UserState>(UserContext)
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={player.isFirstPlayer}
        onChange={props.onChange}
      />
      <span className="slider" />
    </label>
  )
}

export default Switcher
