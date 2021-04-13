/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Author: Marina Harrison

//**STEP 8: EVENT LISTENER FOR START GAME**

    const button = document.getElementById('btn__reset');

    let game; 

    button.addEventListener('click', e => {
        game = new Game();
        game.startGame();
});

/**STEP 10: HANDLES ON SCREEN KEYBOARD CLICKS**/
//create a variable to select all the "key" elements on the keyboard.
//loop through the length of the the keyboard, adding a click event listener for each key
//add the handleInteraction() method as a call back in the event listener
    const keyboard = document.getElementsByClassName('key');

    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].addEventListener('click', e => {
        game.handleInteraction(e.target);
});
}
