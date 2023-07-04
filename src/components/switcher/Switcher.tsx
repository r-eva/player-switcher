import React from "react"
import "./Switcher.css"
import SwitchProps from "../../models/Switcher"

const Switcher: React.FC<SwitchProps> = ({ isFirstPlayer, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isFirstPlayer} onChange={onChange} />
      <span className="slider" />
    </label>
  )
}

export default Switcher
