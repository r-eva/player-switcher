import React from "react"
import "./Switcher.css"

interface SwitchProps {
  isFirstPlayer: boolean
  onChange: () => void
}

const switcher = (props: SwitchProps) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={props.isFirstPlayer}
        onChange={props.onChange}
      />
      <span className="slider" />
    </label>
  )
}

export default switcher
