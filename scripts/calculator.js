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

function updateTotal(value = 0)
{
  userInput = parseInt(userInput);
  userInput3 = parseInt(userInput3);
  if (total === null)
  {
    total = doOperation(userInput, userInput2, userInput3);
    updateDisplay(total);
  }
  else
  {
    total = doOperation(total, userInput2, userInput3);
    updateDisplay(total);
  }
  // console.log(`Logging
  // UserInput: ${userInput} TypeOf: ${typeof userInput}
  // UserInput2: ${userInput2} TypeOf: ${typeof userInput2}
  // UserInput3: ${userInput3} TypeOf: ${typeof userInput3} 
  // Total Is: ${total} TypeOf: ${typeof total}  `)

}

function updateUserInput(value)
{
  if (!userInput2)
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
      bCheckNumber = true;
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
  bCheckNumber = false;
  total = null;
  bCheckEqual = true;
  updateDisplay(0);
}

let userInput = null;
let userInput2 = null;
let userInput3 = null;
let total = null;
let bCheckEqual = true;
let bCheckSign = false;
let bCheckNumber = false;
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const buttonEqual = document.querySelector(".equal");
const display = document.querySelector(".display");
const buttonClear = document.querySelector(".clear");

buttonOperators.forEach((element) =>
  element.addEventListener("click", (eventObject) =>
  {
    if(userInput2 && userInput3) updateTotal();
    userInput2 = eventObject.target.innerText;
    updateDisplay(userInput2);
    if(bCheckNumber){
      updateDisplay(total);
      // updateTotal();
      bCheckNumber = false;
      userInput3 = null;
      bCheckEqual = true;
    }
  })
);

buttonNumbers.forEach((element) =>
  element.addEventListener("click", (eventObject) =>
  {
    updateUserInput(eventObject.target.innerText);
    
  })
);

buttonEqual.addEventListener('click', () =>
{
  if(!bCheckEqual) return;
  updateTotal();
  bCheckEqual = false;
  userInput3 = null;
});
buttonClear.addEventListener('click', resetEverything)


// Works as intended but need to figure out how to retain display of values maybe a secondary display where ex values are pushed into an array before execution but feels like too much time?
// Push into array and iterate over array executing logic once equal is pressed or push and pop? Try at end if time
