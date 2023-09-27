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
  console.log(`Logging
  UserInput: ${userInput} TypeOf: ${typeof userInput}
  UserInput2: ${userInput2} TypeOf: ${typeof userInput2}
  UserInput3: ${userInput3} TypeOf: ${typeof userInput3} 
  Total Is: ${total} TypeOf: ${typeof total}  `)

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
  updateDisplay(0);
}

let userInput = null;
let userInput2 = null;
let userInput3 = null;
let total = null;
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const buttonEqual = document.querySelector(".equal");
const display = document.querySelector(".display");
const buttonClear = document.querySelector(".clear");

buttonOperators.forEach((element) =>
  element.addEventListener("click", (eventObject) =>
  {
    userInput2 = eventObject.target.innerText;
    updateDisplay(userInput2);
    if (userInput3)
    {
      updateTotal();
      userInput3 = null;
    }
  })
);

buttonNumbers.forEach((element) =>
  element.addEventListener("click", (eventObject) =>
  {
    updateUserInput(eventObject.target.innerText);
    // if(userInput3){
    //   updateTotal();
    //   userInput3 = null;
    // }
  })
);

buttonEqual.addEventListener('click', () =>
{
  updateTotal();
});
buttonClear.addEventListener('click', resetEverything)

// Possible to push into array and iterate over array executing logic once equal is pressed? Try at end if time
