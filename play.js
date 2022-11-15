const {connect} = require("./client.js");

console.log("Connecting ...");
connect();

const setupInput = function () {
  // stdin object returned by setupInput allows us to listen for keyboard input and react to it
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

//handleUserInput that runs when receives input from your keyboard
  stdin.on("data", handleUserInput);

  return stdin;

};

//handleUserInput should check for the ctrl + c input and terminate the game
const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  };
};

