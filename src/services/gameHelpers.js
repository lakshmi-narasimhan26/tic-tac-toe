export function checkWinner(plot) {
  const gameWinSlots = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let isGameOver = false;
  gameWinSlots.forEach((winSlot) => {
    let pattern = "" + plot[winSlot[0]] + plot[winSlot[1]] + plot[winSlot[2]];
    if (pattern === "XXX" || pattern === "OOO") {
      isGameOver = true;
      return false;
    }
  });
  return isGameOver;
}

export function isGameTie(plot) {
  return plot.includes(null);
}