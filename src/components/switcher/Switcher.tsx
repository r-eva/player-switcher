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
        value={player.isFirstPlayer ? 'First Player' : 'Second Player'}
        aria-checked={player.isFirstPlayer}
        aria-labelledby={
          player.isFirstPlayer ? 'input-label-player-1' : 'input-label-player-2'
        }
        onChange={props.onChange}
      />
      <label htmlFor="toggle" className="switcher__label">
        <span className="switcher__label-slot" id="input-label-player-1">
          PLAYER 1
        </span>
        <span className="switcher__label-slot" id="input-label-player-2">
          PLAYER 2
        </span>
      </label>
      <div className="switcher__curtain" />
    </div>
  );
}

export default Switcher;
