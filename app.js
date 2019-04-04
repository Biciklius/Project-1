document.addEventListener('DOMContentLoaded', () =>{


  const grid = document.querySelector('.grid')
  // const gameOverScr = document.querySelector('.gameOverScr')
  const instructions = document.querySelector('.instructions')
  const scoreText = document.querySelector('.score')
  const resetBtn = document.querySelector('.resetBtn')
  const mySound = document.querySelector('audio')
  // const instructionsScr = document.querySelector('.instructionsScr')
  const backMusic = document.querySelector('.backMusic')
  const width = 15
  const squares = []
  const snakeSpeed = 500
  const soundButton = document.querySelector('.soundButton')
  const volumeIcon = soundButton.querySelector('i')
  let newSnakeSpeed = snakeSpeed
  let currentStep = 0
  let snake = []
  let direction
  let appleSquare
  let score = 0
  scoreText.innerText = score
  let snakeInterval
  let appleFound = false






  document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
      case 37: if(direction !== 'right') direction = 'left'
        break
      case 38: if(direction !== 'down') direction = 'up'
        break
      case 39: if(direction !== 'left') direction = 'right'
        break
      case 40: if(direction !== 'up') direction = 'down'
        break
      case 32:  clearInterval(snakeInterval)
    }
    console.log(event)
  })

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
    snake.forEach(index => squares[index].classList.add('snake'))
    squares[snake[0]].classList.add('snakeHead')
    squares[snake[0]].setAttribute('data-direction', direction)
    squares[snake[0]].setAttribute('data-step', currentStep)



    console.log('draw')
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
    if (!appleFound) {
      squares[snake[lastSnakeItem]].classList.remove('snake')
      snake.pop()
    }
    appleFound = false
    console.log('update')
    console.log(snakeSpeed)
  }

  function apple(){
    appleSquare = squares[Math.floor(Math.random() * squares.length)]
    if(appleSquare.classList.contains('snake', 'snakeHead')){
      apple()
    }
    appleSquare.classList.add('apple')
    console.log('jabuka')
  }

  function moveSnake() {
    if  (snake[0] % width === 0 && direction === 'left' ||
         snake[0] % width === width -1  && direction === 'right' ||
         snake[0] - width < 0  && direction === 'up' ||
         snake[0] >= width * (width - 1 )  &&  direction === 'down'){
      console.log('tusam')
      return gameOver()
    }
    if (squares[snake[0]].classList.contains('apple')){
      eatApple()
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
    console.log('pokrenizmiju')
  }

  function eatApple(){
    backMusic.loop = true
    appleSquare.classList.remove('apple')
    score++
    newSnakeSpeed = newSnakeSpeed - 5
    clearInterval(snakeInterval)
    snakeInterval = setInterval(moveSnake, newSnakeSpeed)
    scoreText.innerText = score
    apple()
    appleSound()
    appleFound = true
    console.log('jedijabuku')
  }


  function appleSound(){
    mySound.src = './sound/tql.wav'
    mySound.play()
    console.log('zvuk')
  }

  function moveDown(){
    const addSnakeItem = snake[0] + width
    updateSnake(addSnakeItem)
    console.log('dole')
  }

  function moveUp(){
    const addSnakeItem = snake[0] - width
    updateSnake(addSnakeItem)
    console.log('gore')
  }

  function moveLeft(){
    const addSnakeItem = snake[0] - 1
    updateSnake(addSnakeItem)
    console.log('levo')
  }

  function moveRight(){
    const addSnakeItem = snake[0] + 1
    updateSnake(addSnakeItem)
    console.log('desno')
  }

  function eraseSnake() {
    clearInterval(snakeInterval)
    snake.forEach(index => squares[index].classList.remove('snake', 'snakeHead'))
    snake = []
    console.log('obrisizmiju')

  }

  function gameOver(){
    grid.classList.remove('.grid')
    squares.forEach(square => {
      square.style.border = 'none'
    })
    grid.style.backgroundImage = 'url(images/gameOver.png)'
    console.log('erase')
    appleSquare.classList.remove('apple')
    eraseSnake()
    backMusic.loop = false



  }


  function startGame(){
    backMusic.src = 'sound/backMusic.wav'
    backMusic.play()
    backMusic.loop = true
    grid.classList.add('.grid')
    squares.forEach(square => {
      square.style.border = '1px solid gray'
    })
    grid.style.backgroundImage = ''
    snake = [140,141,142,143]
    direction = 'left'
    drawSnakeInit()
    apple()
    snakeInterval = setInterval(moveSnake, snakeSpeed)
    console.log('pokreni')
    score = 0
    scoreText.innerText = score
  }

  function homeScreen(){
    squares.forEach(square => {
      square.style.border = 'none'
    })
    grid.style.backgroundImage = ''
    grid.style.backgroundImage = 'url(images/welcome.png)'
  }

  resetBtn.addEventListener('click',() => {
    startGame()
    // backMusic.play()
    console.log('dugme')
  })
  instructions.addEventListener('click',() =>{
    grid.style.backgroundImage = ''
    grid.style.backgroundImage = 'url(images/instructions.png)'
  })

  soundButton.addEventListener('click',() =>{
    if(volumeIcon.classList.contains('fa-volume-mute')) {
      mySound.volume = 1
      backMusic.volume = 1
      volumeIcon.classList.add('fa-volume-up')
      volumeIcon.classList.remove('fa-volume-mute')
    } else {
      mySound.volume = 0
      backMusic.volume = 0
      volumeIcon.classList.add('fa-volume-mute')
      volumeIcon.classList.remove('fa-volume-up')
    }
  })


  createGrid()
  homeScreen()
// ------------------------------------------------












})
