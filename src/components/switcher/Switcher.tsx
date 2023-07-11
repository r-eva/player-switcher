/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import './Switcher.css';
import UserContext, { UserState } from '../../helpers/store';

function Switcher(props: { onChange: () => void }) {
  const player = useContext<UserState>(UserContext);
  return (
    <div className="switcher" role="navigation">
      <input
        id="toggle"
        className="switcher__input"
        type="checkbox"
        role="switch"
        name="toggle"
        value="on"
        aria-checked={player.isFirstPlayer}
        onChange={props.onChange}
      />
      <label htmlFor="toggle" className="switcher__label">
        <span className="switcher__label-slot">PLAYER 1</span>
        <span className="switcher__label-slot">PLAYER 2</span>
      </label>
      <div className="switcher__curtain" />
    </div>
  );
}

export default Switcher;
