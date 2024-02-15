
function handleKeyboardButtonPress(event) {
    const letterPress = event.key;

    const getcurrentletter = document.getElementById('current-letter');
    const currentLetter = getcurrentletter.innerText;

//    console.log(currentLetter,letterPress.toUpperCase());

    if (letterPress == currentLetter.toLowerCase()) {
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = parseInt(currentScoreElement.innerText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        //--------------------------------------------------------//

        const currentScore = getTextElementValue('current-score');
        const newScore = currentScore + 1;
        setTextElementValue('current-score', newScore);

        removekeyColor(currentLetter.toLowerCase());
        continueGame();

    }
    else{
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLife = parseInt(currentLifeElement.innerText);
        // console.log(currentLife);
        // const newLife = currentLife - 1;
        //currentLifeElement.innerText = newLife;
        //--------------------------------------------------------//

        const currentLife = getTextElementValue('current-life');
        const newLife = currentLife - 1;
        setTextElementValue('current-life', newLife);
        if(currentLife == 0){
            GameOver();
        }

    }
}
document.addEventListener('keyup',handleKeyboardButtonPress)

// function GameEndScore() {
//  //   const currentScore = document.getElementById('current-score');
//  //   console.log(currentScore.innerText);
//     const element = document.getElementById('final-score');
//     setTextElementValue('final-score', element.innerText);
//    // console.log(element);
//  //   element.innerText = currentScore.innerText;

// }

function continueGame() {
    const alphabate = getRandomAlphabate();

    const getcurrentletter = document.getElementById('current-letter');
    getcurrentletter.innerHTML = alphabate;

    setkeyColor(alphabate);
}


function hideandshow() {
    hidePage('home');
    showPage('play');
    hidePage('score');

    setTextElementValue('current-score', 0);
    setTextElementValue('current-life', 5);

    continueGame();
}

function GameOver() {
    hidePage('home');
    hidePage('play');
    showPage('score');

    const currentScore = document.getElementById('current-score');
    setTextElementValue('final-score', currentScore.innerText);
}

function playagain(){
    hidePage('home');
    showPage('play');
    hidePage('score');

    setTextElementValue('current-score', 0);
    setTextElementValue('current-life', 5);
}