const readline = require("readline");
const fetch = require("node-fetch");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Please insert the user's github name to see the followers:",
  answer => {
    showFollowers(answer);

    rl.close();
  }
);

const followersName = data => {
  data.forEach(person => {
    const name = person.login;
    console.log(name);
  });
};

const showFollowers = answer => {
  fetch(`https://api.github.com/users/${answer}/followers`)
    .then(response => response.json())
    .then(followersName);
};
