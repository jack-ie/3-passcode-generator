//user chooses r, p, s
//computer chooses r, p ,s
//alert user computer choice
//alert user if game won or lost
//confirm to play again


function playTheGame() {
    var possChoices = ['R','P','S']

    var comChoice = ''

    var message = 'Play R, P, S'

    alert(message)

    var userInput = prompt('Choose R, P, S')
    console.log(userInput)
    // return Math.floor(Math.random() * max);
    comChoice = possChoices [Math.floor(Math.random() * 3)];
    console.log(comChoice)

    if (userInput === comChoice) {
        alert('TIE')
    }else if(userInput === 'R' && comChoice === 'S') {
        alert('User Wins')
    }else if(userInput === 'S' && comChoice === 'R') {
        alert('User Loses')
    }else if(userInput === 'P' && comChoice === 'S') {
        alert('User Loses')
    }else if(userInput === 'R' && comChoice === 'P') {
        alert('User Wins')
    }else if(userInput === 'S' && comChoice === 'P') {
        alert('User Wins')
    }else if(userInput === 'P' && comChoice === 'R') {
        alert('User Wins')
    }

    var response = confirm('Would you like to play again?')
        if (response) {
            playTheGame()
        }
}

// playTheGame()



//   console.log(getRandomInt(3));
//   console.log(getRandomInt(P));

//   console.log(getRandomInt(S));


//true or false
// var response = confirm('')

// console.log(response)