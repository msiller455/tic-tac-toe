const prompt = require("prompt-sync")()

console.log('Tic Tac Toe')


/*------ Constant Lookup Data -----*/
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

/*------ State -----*/
// These are used to track the 'state' of the game
let turn, board, winner


/*------ Game Logic -----*/
init()
gameplayLoop()




/*------ Functions -----*/
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

// Purpose of render function is to display our state data to the user in some way shape or form.
function render() {
  // Rendering the message
  renderMessage()
  // Rendering the board
  renderBoard()
}

function renderMessage() {
  if (!winner) {
    console.log(`It is player ${turn}'s turn`)
  } else if (winner === 'T') {
    console.log('Tie Game!!!')
  } else {
    console.log(`The winner is player ${winner}`)
  }
}

function renderBoard() {
  console.log(`  ${board[0]}|${board[1]}|${board[2]}`);
  console.log(' --|-|--');
  console.log(`  ${board[3]}|${board[4]}|${board[5]}`);
  console.log(' --|-|--');
  console.log(`  ${board[6]}|${board[7]}|${board[8]}`);
}

// what goes into a turn of tic tac toe
// 1. have player choose an empty space
//   a. first we need to get the player's input DONE
//   b. check if the player input is valid (num between 0 and 8) DONE
//   c. check if the inputed spot on the board is empty DONE
// 2. put our player's character ('x' or 'o') in that space on the board DONE
// 3. change the turn
// 4. check if we won the game or not
// 5. Keep going until winner or a cats game

function gameplayLoop() {
  while (!winner) {
    let playerChoice = prompt('Please enter a number between 0 and 8: ')

    playerChoice = parseInt(playerChoice)

    if (playerChoice >= 0 && playerChoice <= 8) {
      if (board[playerChoice] === ' ') {
        // The player has chosen a valid empty spot
        board[playerChoice] = turn
        turn = changeTurn()
        winner = checkWinner()
        render()
      } else {
        console.log('This space is occupied! Please select a different space.')
      }
    } else {
      console.log('This is an invalid number, please choose again.')
    }
  }
}

function changeTurn() {
  if (turn === 'X') {
    return 'O'
  } else {
    return 'X'
  }
}

function checkWinner() {
  for (let combo of WINNING_COMBOS) {
    if (
      board[combo[0]] === board[combo[1]]
      && board[combo[0]] === board[combo[2]]
      && board[combo[0]] !== ' '
    ) {
      return board[combo[0]]
    }
  }

  if (!board.includes(' ')) {
    return 'T'
  }

  return null
}