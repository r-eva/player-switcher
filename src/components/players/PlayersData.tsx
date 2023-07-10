/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState, useEffect } from 'react';
import './Players.css';
import UserContext, { UserState } from '../../helpers/store';
import useLocalStorage from '../../helpers/useLocalStorage';

function PlayersData() {
  const player = useContext<UserState>(UserContext);
  const [disableButton, setDisableButton] = useState(true);
  const [player1Score, setPlayer1Score] = useLocalStorage('player1', '0');
  const [player2Score, setPlayer2Score] = useLocalStorage('player2', '0');

  useEffect(() => {
    if (player.isFirstPlayer) {
      player1Score !== '0' ? setDisableButton(false) : setDisableButton(true);
    } else {
      player2Score !== '0' ? setDisableButton(false) : setDisableButton(true);
    }
  }, [player.isFirstPlayer, player1Score, player2Score]);

  const plusButtonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) + 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString());
    setDisableButton(false);
  };

  const minusButonHandler = () => {
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) - 1).toString())
      : setPlayer2Score((Number(player2Score) - 1).toString());
  };

  const resetButtonHandler = () => {
    if (player.isFirstPlayer) {
      setPlayer1Score('0');
    } else {
      setPlayer2Score('0');
    }
  };
  return (
    <div className="player">
      <div className="player__container">
        <h1>{player.isFirstPlayer ? 'Karina Shields' : 'Jeremy Figueroa'}</h1>
        <h2>{player.isFirstPlayer ? player1Score : player2Score}</h2>
        <div className="player__plusminus-button">
          <button
            className="quantity-button"
            onClick={minusButonHandler}
            disabled={disableButton}
            type="button"
          >
            -
          </button>
          <button
            className="quantity-button"
            onClick={plusButtonHandler}
            type="button"
          >
            +
          </button>
        </div>
        <button
          className="reset-button"
          onClick={resetButtonHandler}
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default PlayersData;
