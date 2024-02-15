
function hidePage(mypageid) {
    const element = document.getElementById(mypageid);
    element.classList.add('hidden');
}

function showPage(mypageid) {
    const element = document.getElementById(mypageid);
    element.classList.remove('hidden');
}

function setkeyColor(mypageid) {
    const element = document.getElementById(mypageid);
    element.classList.add('bg-orange-400');
}

function removekeyColor(mypageid) {
    const element = document.getElementById(mypageid);
    element.classList.remove('bg-orange-400');
}

function getTextElementValue(mypageid) {
    const element = document.getElementById(mypageid);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

function setTextElementValue(mypageid, value) {
    const element = document.getElementById(mypageid);
    element.innerText = value;
}

// function GameEnd() {
//     const currentScore = document.getElementById('current-score');
//     const element = document.getElementById('final-score');
//     element.innerText = currentScore.innerText;
// }

function getRandomAlphabate(){
    const AlphabeticString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetes = AlphabeticString.split('');
 //   console.log(alphabetes);

    const RandomNum = Math.random()*25;
    const RandomIndex = Math.round(RandomNum);
  //  console.log(RandomIndex);

    const alphabate = alphabetes[RandomIndex];
    return alphabate;
}