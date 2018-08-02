const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Please insert the first number you want to calculate: ",
  answer1 => {
    rl.question(
      "Please insert the second number you want to calculate: ",
      answer2 => {
        rl.question("Please insert the operator for calculation: ", answer3 => {
          if (answer3 == "+") {
            var result = Number(answer1) + Number(answer2);
          } else if (answer3 == "-") {
            var result = Number(answer1) - Number(answer2);
          } else if (answer3 == "*") {
            var result = Number(answer1) * Number(answer2);
          } else if (answer3 == "/") {
            var result = Number(answer1) / Number(answer2);
          }
          console.log(
            `The answer of ${answer1} ${answer3} ${answer2} is ${result}`
          );
          rl.close();
        });
      }
    );
  }
);
