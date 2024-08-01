/*-------- Cached Elements ------ */
const messageEl = document.querySelector('h3')
const boardEl = document.querySelector('div.board')
const resetBtn = createResetBtn()

/*-------- Event Listeners ------ */
boardEl.addEventListener('click', handleBoardClick)
resetBtn.addEventListener('click', init)

/*-------- Constant Lookup Data ------*/
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

/*-------- State -------*/
let turn, board, winner

/*-------- Game Logic -------*/
init()

/*--------- Functions --------*/
function init() {
  turn = 'X'
  board = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
  winner = null
  render()
}

function render() {
  renderMessage()
  renderBoard()
  renderResetBtn()
}

function renderMessage() {
  if (!winner) {
    messageEl.innerText = `It is player ${turn}'s turn`
  } else if (winner === 'T') {
    messageEl.innerText = 'Tie Game!!!'
  } else {
    messageEl.innerText = `The winner is player ${winner}`
  }
}

function renderBoard() {
  board.forEach(function (cell, idx) {
    boardEl.children[idx].innerText = cell
  })
}

function renderResetBtn() {
  if (winner) {
    document.body.append(resetBtn)
  } else {
    resetBtn.remove()
  }
}

function createResetBtn() {
  const resetBtn = document.createElement('button')
  resetBtn.innerText = 'Play again'
  return resetBtn
}

function handleBoardClick(evt) {
  if(winner) return

  // Did the user click a valid cell?
  if (evt.target.className === "board") return

  const cellArr = [...boardEl.children]
  const idx = cellArr.indexOf(evt.target)
  // is that valid cell empty?
  if(board[idx]) return

  board[idx] = turn
  turn = changeTurn()
  winner = checkWinner()
  render()
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
      && board[combo[0]]
    ) {
      return board[combo[0]]
    }
  }

  if (!board.includes(null)) {
    return 'T'
  }

  return null
}