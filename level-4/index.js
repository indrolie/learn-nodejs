const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showResult = (firstNumber, secondNumber, operator) => {
  let result = 0;

  switch (operator) {
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      result = Number(firstNumber) / Number(secondNumber);
      break;
    default:
      result = 0;
      break;
  }

  console.log(
    `The answer of ${firstNumber} ${operator} ${secondNumber} = ${result}`
  );
};

const firstQuestion = () => {
  rl.question(
    "Please insert the first number you want to calculate: ",
    secondQuestion
  );
};

const secondQuestion = answer1 => {
  rl.question(
    "Please insert the second number you want to calculate: ",
    answer2 => operator(answer1, answer2)
  );
};

const operator = (answer1, answer2) => {
  rl.question(
    "Please insert the operator for calculation (+, -, *, /): ",
    answer3 => {
      showResult(answer1, answer2, answer3);
      rl.close();
    }
  );
};

firstQuestion();
