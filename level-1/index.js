console.log("JAVASCRIPT");
const chalk = require("chalk");

const a = 5;
const b = 10;

const c = a + b;
const d = a - b;
const e = b / a;
const f = (a + b) / d;
const g = (b / a + b) % b;

console.log(chalk.bgGreen(c, d, e, f, g));
