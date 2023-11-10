import { useState } from 'react';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function Square() {
  const [buttonText, setButtonText] = useState("Choose rock paper or scissors to play!"); 
  const changeText = (text) => setButtonText(text);
  const [scoreText, setscoreText] = useState("0"); 
  const changescoreText = (text) => setscoreText(text);
  function help1 () {
    if (Math.floor(Math.random() * (3 -  1 + 1) + 1) == 1) {
      return('Rock! Its a draw!')
    }
    if (Math.floor(Math.random() * (3 -  1 + 1) + 1) == 2) {
      changescoreText(scoreText - 1)
      return('Paper! You lose!')
    }
    else {
      changescoreText(scoreText + 1)
      return('Scissors! You win!')
    }
  }
  function help2 () {
    if (Math.floor(Math.random() * (3 -  1 + 1) + 1) == 1) {
      changescoreText(scoreText + 1)
      return('Rock! You win!')
    }
    if (Math.floor(Math.random() * (3 -  1 + 1) + 1) == 2) {
      return('Paper! Its a draw!')
    }
    else {
      changescoreText(scoreText - 1)
      return('Scissors! You lose!')
    }
  }
  function help3 () {
    if (Math.floor(Math.random() * (3 -  1 + 1) + 1) == 1) {
      changescoreText(scoreText - 1)
      return('Rock! You lose!')
    }
    if (Math.floor(Math.random() * (3 -  1 + 1) + 1) == 2) {
      changescoreText(scoreText + 1)
      return('Paper! You win!')
    }
    else {
      return('Scissors! Its a draw!')
    }
  }
  return (
    <>
    <div>
    <button className="rectangle" onClick={() => changeText(help1() + ' Choose another to play again!')}>Rock</button>
    <button className="rectangle0" onClick={() => changeText(help2() + ' Choose another to play again!')}>Paper</button>
    <button className="rectangle00" onClick={() => changeText(help3() + ' Choose another to play again!')}>Scissors</button>
    <Popup trigger={<button className="rectangle2">Rules</button>}>
    <img src="https://www.pgpedia.com/sites/default/files/styles/medium/public/2022-04/rock-paper-scissors.png?itok=4c3ASz79" alt="Rules Image" />
    </Popup>
    </div>
    <div className="status">{buttonText}</div>
    <div className="score">{'Score: ' + scoreText}</div>
    </>
  );
}

