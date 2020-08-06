/**
 * This is to determine if we have a winner
 *
 * @param {array} tiles - The current state of the board
 *
 * @return {string | undefined} - If there is winner it will return the winning char or else undefined
 *
 */
export const checkWinner = (tiles) => {
  const winningCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  for (let i = 0; i < winningCells.length; i++) {
    const [a, b, c] = winningCells[i];
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
};
