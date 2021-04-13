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
    //**STEP 5: GET RANDOM PHRASE METHOD */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }
   
    //**STEP 7: START GAME METHOD* */
    startGame(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    //STEP 9: GAME CLASS METHODS
    //***CHECKS FOR WINNING MOVE, RETURN TRUE IF GAME HAS BEEN WON, FALSE IF LOST */
    checkForWin(){
        //i want to check if all of the letters from showMatchedLetter are revealed, then the game is over and the player has won
        //1) create a variable that grabs all the hidden letters
        //2) create a conditional statement that if the length of the hidden letters class is 0 return true, if not false
        const hiddenLetters = document.getElementsByClassName('hide');
        if (hiddenLetters.length === 0){
            return true;
        } else {
            return false;
        }
    }

    //**REMOVES LIVEHEART IMG AND REPLACES WITH LOSTHEART IMG IF THE VALUE OF THE MISSED PROPERTY HAS BEEN INCREASED  */
   removeLife(){
       //replace a liveheart image with a lostheart image
       //increments on the `missed` property
       //if player has 5 missed lives then call gameOver();
        this.missed++
        const lives = document.querySelector(".tries");
        let heart = lives.firstChild;
        lives.classList.remove("tries");
        heart.src = "images/lostHeart.png";
        if (this.missed === 5) {
            this.gameOver();
    }
  }

   //**DISPLAYS GAME OVER AND WIN/LOSS MESSAGES */
   gameOver(gameWon){
       this.resetGame();
       //display the orginal start screen overlay
       //updates the h1 with a win or loss message, depending on outcome
       //replace overlay 'start'  CSS class with either the win or lose class
        let showStartScreen = document.getElementById('overlay');
        let gameOverMessage = document.getElementById('game-over-message');
        let startButton = document.getElementsByClassName('start');

       showStartScreen.style.display = '';
       if (gameWon) {
           gameOverMessage.textContent = 'Congrats! You have guessed the movie quotes!';
           startButton.textContent = 'Try again?';
           showStartScreen.className = 'win';
       } else {
           gameOverMessage.textContent = 'Sorry, you lost :(';
           startButton.textContent = 'Try again?';
           showStartScreen.className = 'lose';
       }

   }
   //STEP 11: BUILD OUT THE HANDLE INTERACTION CLASS
   handleInteraction(button) {
        //diable the button
        //add 'wrong' CSS class to the selected letter and call the removeLife method
        //if it does include the guessed letter, add the 'chosen' CSS class to the keyboard button and 
        //call the checkForWin() method
        //if the player wins, call the gameOver() method
        button.disabled = true;
        
        let clickedLetter = this.activePhrase.checkLetter(button.textContent)
    
        if(!clickedLetter) {
            button.classList.add('wrong');
        return this.removeLife();
    }   else {
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(button.textContent);
    if (this.checkForWin() === true){
        return this.gameOver(true);
             }
        }
    }
    //STEP 12: RESET THE GAME
    resetGame() {
        //remove all the 'li' elements from the ul
        //enable the keyboard buttons
        //update the buttons to use the 'key' class not the 'wrong' or 'chosen' class
        //reset the heart images
        let ulGame = document.querySelector('#phrase ul');
        ulGame.innerHTML = '';
            
        let selectedKeys = document.getElementsByClassName('key');
        for (let i = 0; i < selectedKeys.length; i++) {
              selectedKeys[i].disabled = false;
              selectedKeys[i].classList.remove('chosen', 'wrong');
            }
        let heartGame = document.querySelectorAll('#scoreboard ol li');
        for (let i = 0; i < heartGame.length; i++) {
              if (heartGame[i].classList != 'tries') {
                heartGame[i].classList.add('tries');
                heartGame[i].firstChild.src = 'images/liveHeart.png';
            } 
        }
    }
}