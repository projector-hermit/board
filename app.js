const board = document.querySelector('#board')
const colors =['rgb(102, 255, 0)', 'rgb(76, 167, 16)', 'rgb(60, 149, 0)', 'rgb(32, 78, 1)', 'rgb(16, 39, 0)', 'rgb(187, 255, 0)']
const SQUARES_NUMBER = 990

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
    }
    
    function setColor(element) {
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }