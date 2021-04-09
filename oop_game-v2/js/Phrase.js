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
});
    }    
}