import React, {useState} from 'react'
import Plot from './Plot';
import {checkWinner, isGameTie} from '../services/gameHelpers';

function Game() {

  const [plot, setPlot] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const isGameDone = checkWinner(plot);
  const gameTiedText = !isGameTie(plot) && !isGameDone ? <div className="title">Game Tied</div> : "";

  const action = (i) => {
    if (plot[i] || isGameDone) return;

    plot[i] = isX ? "X" : "O";
    setIsX(!isX);
  }

  const reset = () => {
    setPlot(Array(9).fill(null));
    setIsX(true);
  }

  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const headers = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '400px'
  };

  const highlight = {
    fontSize: '24px',
    margin: '12px',
    padding: '2px',
    borderBottom: '4px solid #ff5959',
  };

  const highlightDisabled = {
    fontSize: '24px',
    margin: '12px',
    padding: '2px',
    color: '#787e93'
  }
  
  return (
    <div style={container}>
      <div className="title">Tic Tac Toe!</div>
      <div style={headers}>
        <div style={isX && !isGameDone ? highlight : highlightDisabled}>Player 1 (X)</div>
        <div style={!isX && !isGameDone ? highlight : highlightDisabled}>Player 2 (O)</div>
      </div>
      <Plot squares={plot} onClick={action} />
      {gameTiedText}
      {!isGameDone || (!isX ? <div className="title">Player 1 Won</div> : <div className="title">Player 2 Won</div>)}
      <button className="button" onClick={reset}>Start New Game</button>
    </div>
  )
}

export default Game
