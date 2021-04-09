/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Declare the game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase ('May the Force be with you'),
            new Phrase ('ET phone home'),
            new Phrase ('Bond James Bond'),
            new Phrase ('Theres no place like home'),
            new Phrase ('Show me the money')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }
    startGame() {
        
    }
}