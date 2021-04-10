/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Declare the phrase class
class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
addPhraseToDisplay() {
let ul = document.getElementById('phrase').firstElementChild;
let splitPhrase = this.phrase.split('');

//loop through each letter of the phrase
splitPhrase.forEach(selected => {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML= selected;

    if (selected === ' ') {
     li.classList.add('hide')   
     li.classList.add('space');   
    } else {
        li.classList.add('hide');
        li.classList.add('letter');
    }
})
    }
//CHECKS IF PASSED LETTER IS IN THE ACTIVE PHRASE    
checkLetter(letter) {
    if (this.phrase.includes(letter)) {
        return true; 
} else {
    return false;
}
}

//DISPLAYS PASSED LETTER ON SCREEN AFTER A MATCH IS FOUND
showMatchedLetter(letter) {
    const letterReveal = document.getElementsByClassName(letter);
    for (let i = 0; i < letterReveal.length; i++) {
        letterReveal[i].classList.remove('hide');
        letterReveal[i].classList.add('show');
        }
    }   
}           
