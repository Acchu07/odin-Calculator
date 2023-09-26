function getAddition(valueFirst, valueSecond)
{
  return valueFirst + valueSecond;
}

function getSubtraction(valueFirst, valueSecond)
{
  return valueFirst - valueSecond;
}

function getMultiplication(valueFirst, valueSecond)
{
  return valueFirst * valueSecond;
}

function getDivision(valueFirst, valueSecond)
{
  return valueFirst / valueSecond;
}

function doOperation(userInput, userInput2, userInput3)
{
  switch (userInput2)
  {
    case "+":
      return getAddition(userInput, userInput3);
      //  bCanChange = false; // Test but to implement towards the end

    case "-":
      return getSubtraction(userInput, userInput3);

    case "*":
      return getMultiplication(userInput, userInput3);
      break;
    case "/":
      return getDivision(userInput, userInput3);
  }
}

function updateDisplay(value)
{
  display.innerText = value;
}

function updateTotal(value=0){
  userInput = parseInt(userInput);
  userInput3 = parseInt(userInput3);
  console.log(`Logging
  UserInput: ${userInput} TypeOf: ${typeof userInput}
  UserInput2: ${userInput2} TypeOf: ${typeof userInput2}
  UserInput3: ${userInput3} TypeOf: ${typeof userInput3} `)
  total = doOperation(userInput,userInput2,userInput3);
  updateDisplay(total);

}

function updateUserInput(value)
{
  if (bChangeUserInput)
  {
    if (userInput === null)
    {
      userInput = value;
      updateDisplay(userInput);
      return;
    }
    userInput += value;
    updateDisplay(userInput);
    return;
  }
  else
  {
    if (userInput3 === null)
    {
      userInput3 = value;
      updateDisplay(userInput3);
      return;
    }
    userInput3 += value;
    updateDisplay(userInput3);
    return;
  }
}

function resetEverything()
{
  userInput = null;
  userInput2 = null;
  userInput3 = null;
  bChangeUserInput = true;
  total = null;
}

let userInput = null;
let userInput2 = null;
let userInput3 = null;
let total = null;
// let bCanChange = true;
let bChangeUserInput = true;
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const buttonEqual = document.querySelector(".equal");
const display = document.querySelector(".display");

buttonOperators.forEach((element) =>
  element.addEventListener("click", (eventObject) =>
  {
    bChangeUserInput = false;
    userInput2 = eventObject.target.innerText;
    updateDisplay(userInput2);
  })
);

buttonNumbers.forEach((element) =>
  element.addEventListener("click", (eventObject) =>
  {
    updateUserInput(eventObject.target.innerText);
  })
);

buttonEqual.addEventListener('click', updateTotal);

// Possible to push into array and iterate over array executing logic once equal is pressed? Try at end if time
