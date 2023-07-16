let cp = require("child_process");
console.log("Trying to open Google Website");
// cp.execSync("calc");
cp.execSync("start chrome https:\\www.goo gle.com");
console.log("opened google chrome");