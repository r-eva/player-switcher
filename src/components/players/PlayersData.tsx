/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState, useEffect, useRef } from 'react';
import './Players.css';
import UserContext, { UserState } from '../../helpers/store';
import useLocalStorage from '../../helpers/useLocalStorage';
import women from './woman_avatar.png';
import men from './men_avatar.png';

function PlayersData() {
  const player = useContext<UserState>(UserContext);
  const buttonDecrement = useRef<HTMLButtonElement | null>(null);
  const buttonIncrement = useRef<HTMLButtonElement | null>(null);
  const numberAnim = useRef<HTMLSpanElement | null>(null);
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
    numberAnim.current?.classList.add('plus-one');
    if (numberAnim.current != null) {
      numberAnim.current.innerText = '+1';
    }
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) + 1).toString())
      : setPlayer2Score((Number(player2Score) + 1).toString());
    numberAnim.current?.classList.remove('player__decincnumber');
    setDisableButton(true);
    setTimeout(() => {
      numberAnim.current?.classList.remove('plus-one');
      numberAnim.current?.classList.add('player__decincnumber');
      setDisableButton(false);
    }, 500);
  };

  const minusButonHandler = () => {
    numberAnim.current?.classList.add('minus-one');
    if (numberAnim.current != null) {
      numberAnim.current.innerText = '-1';
    }
    player.isFirstPlayer
      ? setPlayer1Score((Number(player1Score) - 1).toString())
      : setPlayer2Score((Number(player2Score) - 1).toString());
    numberAnim.current?.classList.remove('player__decincnumber');
    setDisableButton(true);
    setTimeout(() => {
      numberAnim.current?.classList.remove('minus-one');
      numberAnim.current?.classList.add('player__decincnumber');
    }, 500);
  };

  const resetButtonHandler = () => {
    if (player.isFirstPlayer) {
      setPlayer1Score('0');
    } else {
      setPlayer2Score('0');
    }
  };
  return (
    <div className="player" role="main">
      <img
        src={player.isFirstPlayer ? men : women}
        alt="Player Avatar"
        className="player__img-avatar"
      />
      <div className="player__container">
        <h1>{player.isFirstPlayer ? 'Jeremy Figueroa' : 'Karina Shields'}</h1>
        <div className="player__score">
          <h2>Score: {player.isFirstPlayer ? player1Score : player2Score}</h2>
          <span ref={numberAnim} className="player__decincnumber" />
        </div>
        <div className="player__plusminus-button">
          <button
            className="quantity-button"
            onClick={minusButonHandler}
            disabled={disableButton}
            type="button"
            ref={buttonDecrement}
          >
            -
          </button>
          <button
            className="quantity-button"
            onClick={plusButtonHandler}
            type="button"
            ref={buttonIncrement}
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
