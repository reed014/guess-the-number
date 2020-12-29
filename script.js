let correctNumber = getRandomNumber();
console.log(correctNumber);

let submitBtn = document.getElementById("number-submit");
let initBtn = document.getElementById("restart-game");
showYouWon();



/**
* Functionality for playing the whole game
*/
function playGame(){
  // *Code goes below here*
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
}

/**
 * Show the result for if the guess ittoo high, or too low, or correct
 * HINT: reset the correctNumber, gueses, and HTML content
 */
// * code goes below here *
function displayResult(numberGuess){
  if(numberGuess > correctNumber){
    console.log("too high");  
  } else if(numberGuess < correctNumber){
    console.log("too low");
  } else if (numberguess = correctNumber){
    console.log("is correct");

  }
}


/** This is ES6 way of definig a function */
const initGame = () => {
    console.log('Does something');
}

/** 
 * The function above is almost the same as this:
 * 
 * function initGame() {
 *      console.log('Does something');
 * }
 * 
 */

 /**
  * Save guess history
  * HINT: Search Google "append to array in javascript"
  * HINT: Use the guesses variable
  */
function getRandomNumber(){
// *Code goes below here *
    let RandomNumber = Math.random();
    let wholeNumber = Math.floor(RandomNumber * 100) + 1;
    return wholeNumber;
}
function saveGuesshistory(guess) {
  // *code goes below here *
}

/**
 * display guess history
 * HTML to USE
 * <ul class='list-group'>
 * <li class='list-group-items'>You guessed (number)</li
 * </ul>
 * HINT: use while loop and string concatentation to create list
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}


/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text){
  let diglog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-sucess' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon(){
  const text = "Awesome Job, you fucking got it!"
  /**
   * retreieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  // *CODE GOES BELOW HERE*
  let dialog = getDialog('won', text);
  console.log(dialog);
  document.getElementById("result").innerHTML = diglog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * hint: Use the 'warning'vand text parameters 
   */
  // *Code Goes Below Here*
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function snowNunmberBelow(){
  const text = " Your guess is low!"
  /**
   * Retrieve the dialog usi tnghe getDialog() function
   *  and save it to variable called dialog
   * hint: Use the 'warning'vand text parameters
   */
  // *Code Goes Below Here*
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
