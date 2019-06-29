document.addEventListener('DOMContentLoaded', () =>{


  const grid = document.querySelector('.grid')
  const gameOver = document.querySelector('.gameOver')
  const instructions = document.querySelector('.instructions')
  const scoreText = document.querySelector('.score')
  const resetBtn = document.querySelector('.resetBtn')
  const mySound = document.querySelector('audio')
  const width = 15
  const squares = []
  // TO-DO: calculate snakes position automatically
  let snake = []
  // TO-DO: direction values to constants
  let direction = 'left'
  let chosenSquare
  let score = 0
  scoreText.innerText = score
  let snakeInterval
  const snakeSpeed = 500



  document.addEventListener('keydown', (e) => {
    // TO-DO: direction values to constants
    switch(e.keyCode) {
      case 37: if(direction !== 'right') direction = 'left'
        break
      case 38: if(direction !== 'down') direction = 'up'
        break
      case 39: if(direction !== 'left') direction = 'right'
        break
      case 40: if(direction !== 'up') direction = 'down'
        break
    }
  })

  // grid creation
  function createGrid(){
    grid.innerHTML = ''
    for(let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      squares.push(square)
      grid.appendChild(square)
    }
    console.log('grid created')
  }

  function drawSnakeInit() {
    snake = [145,146,147,148]
    snake.forEach(index => squares[index].classList.add('snake'))
    squares[snake[0]].classList.add('snakeHead')
  }

  function updateSnake(snakeItem) {
    for(let i=0; i<= snake.length; i++) {
      if(snake[i] === snakeItem) {
        return gameOver()
      }
    }
    squares[snake[0]].classList.remove('snakeHead')
    snake.unshift(snakeItem)
    squares[snake[0]].classList.add('snake', 'snakeHead')
    const lastSnakeItem = snake.length - 1
    squares[snake[lastSnakeItem]].classList.remove('snake')
    snake.pop()
  }

  function apple(){
    chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    if(chosenSquare.classList.contains('snake', 'snakeHead')){
      apple()
    }
    chosenSquare.classList.add('apple')
  }

  function moveSnake() {
    if (snake[0] % width === 0 && direction === 'left' ||
        snake[0] % width === width -1  && direction === 'right' ||
        snake[0] - width < 0  && direction === 'up' ||
        snake[0] >= width * (width - 1 )  &&  direction === 'down'){
      //snake is on one of the edges of the grid
      return gameOver()
    }
    switch (direction){
      case 'right': moveRight()
        break
      case 'left': moveLeft()
        break
      case 'up': moveUp()
        break
      case 'down': moveDown()
    }
    if (squares[snake[0]].classList.contains('apple')){
      chosenSquare.classList.remove('apple')
      snake.unshift(snake[0])
      score++
      scoreText.innerText = score
      apple()
      appleSound()
    }

    function appleSound(){
      mySound.src = './sound/tql.wav'
      mySound.play()
    }


  }
  function moveDown(){
    const addSnakeItem = snake[0] + width
    updateSnake(addSnakeItem)
  }

  function moveUp(){
    const addSnakeItem = snake[0] - width
    updateSnake(addSnakeItem)
  }

  function moveLeft(){
    const addSnakeItem = snake[0] - 1
    updateSnake(addSnakeItem)
  }

  function moveRight(){
    const addSnakeItem = snake[0] + 1
    updateSnake(addSnakeItem)
  }
  function eraseSnake() {
    clearInterval(snakeInterval)
    snake = []
    snake.forEach(index => squares[index].classList.remove('snake','snakeHead'))
  }

  function gameOver(){
    gameOver.classList.add('gameOver')
    eraseSnake()
  }

  function startGame(){
    createGrid()
    drawSnakeInit()
    apple()
    snakeInterval = setInterval(moveSnake, snakeSpeed)
    gameOver.classList.remove('gameOver')
  }
  resetBtn.addEventListener('click',() => {
    startGame()
  })
  instructions.addEventListener('click',() => {

    grid.classList.add('instructions')
  })
})
