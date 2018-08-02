const readline = require("readline");
const fetch = require("node-fetch");

const run = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(
    "Please insert the user's github name to see the followers: ",
    username => {
      fetchFollowers(username);
      rl.close();
    }
  );
};

const displayFollowers = data => {
  data.forEach(({ login }) => {
    console.log(login);
  });
};

const fetchFollowers = username => {
  fetch(`https://api.github.com/users/${username}/followers`)
    .then(response => response.json())
    .then(displayFollowers);
};

run();
