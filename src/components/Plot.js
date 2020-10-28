import React from 'react'
import Square from './Square';

function Plot({ squares, onClick }) {

  const style = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    width: '400px',
    height: '400px'
  }

  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)}/>
      ))}
    </div>
  )
}

export default Plot
