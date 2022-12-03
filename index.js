//Detecting keyboard Press

document.addEventListener('keydown', function (event) {
  let keyPressed = event.key
  soundKey(keyPressed)
  buttonAnimation(keyPressed)
})

//Detecting mouse clicked

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonClick = this.innerHTML
    soundKey(buttonClick)
    buttonAnimation(buttonClick)
  })
}

//Play the sound accordingly with the letter

function soundKey(Key) {
  switch (Key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play()
      break
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play()
      break
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play()
      break
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play()
      break
    case 'j':
      var snare = new Audio('sounds/snare.mp3')
      snare.play()
      break
    case 'k':
      var crash = new Audio('sounds/crash.mp3')
      crash.play()
      break
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3')
      kick.play()
      break
    default:
      break
  }
}

function buttonAnimation(key) {
  let button = document.querySelector('.' + key)

  button.classList.add('pressed')

  setTimeout(function () {
    button.classList.remove('pressed')
  }, 1000)
}
