import React from 'react'

function Square({ value, onClick }) {

  const style = {
    backgroundColor: '#f8f8f8',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    padding: '20px',
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900'
  };

  return (
    <>
      <div style={style} onClick={onClick}>{value}</div>
    </>
  )
}

export default Square
