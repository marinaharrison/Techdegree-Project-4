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

//loop through each letter of the phrase
for (let i = 0; i < this.phrase.length; i++) {

//if the character in the phrase is not a space create an li element that hides the letter    
    if (this.phrase.charAt(i) !== ' ') {
        const li = document.createElement('li');
        li.setAttribute("class", `hide letter ${this.phrase.charAt(i)}`);
        ul.appendChild(li);
        li.textContent = `${this.phrase.charAt(i)}`;
    } else {
        const li = document.createElement("li");
        li.setAttribute("class", `space`);
        ul.appendChild(li);
        li.textContent = " "; 
    }
}
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
    if (this.checkLetter(letter)){
    for (let i = 0; i < letterReveal.length; i++) {
    letterReveal[i].classList.replace('hide', 'show');
            }
        }
    }   
}
