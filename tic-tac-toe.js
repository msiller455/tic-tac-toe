
console.log('Tic Tac Toe')

/*------ State -----*/
// These are used to track the 'state' of the game
let turn, board, winner


/*------ Game Logic -----*/
init()
gameplayLoop()

// Purpose of init function is to put the state of the game in a "starting position"
function init() {
  turn = 'X'
  board = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  winner = null
  render()
}

function render() {
  // Rendering the turn
  console.log(`It is player ${turn}'s turn`)
  // Rendering the board
  renderBoard()
}

function renderBoard() {
  console.log(`  ${board[0]}|${board[1]}|${board[2]}`);
  console.log(' --|-|--');
  console.log(`  ${board[3]}|${board[4]}|${board[5]}`);
  console.log(' --|-|--');
  console.log(`  ${board[6]}|${board[7]}|${board[8]}`);
}

// what goes into a turn of tic tac toe
// 1. have to choose an empty space
// 2. put our player's character ('x' or 'o') in that space on the board
// 3. check if we won the game or not
// 4. change the turn

function gameplayLoop() {
  while (!winner) {
    // Contain all the code for what constitutes one turn
  }
}