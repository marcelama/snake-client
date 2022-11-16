const {  MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MSG } = require("./constants.js");

let connection;

const setupInput = (conn) => {
  //setupInput() to accept an object that lets you interact with the server
  connection = conn;

  // stdin object returned by setupInput allows us to listen for keyboard input and react to it
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

//handleUserInput that runs when receives input from your keyboard
  stdin.on("data", handleUserInput);

  return stdin;

};



const handleUserInput = function (key) {
  //handleUserInput should check for the ctrl + c input and terminate the game
  if (key === '\u0003') {
    process.exit();
  } if (key === 'w') {
    connection.write(MOVE_UP_KEY);
  } if (key === 'a') {
    connection.write(MOVE_DOWN_KEY);
  } if (key === 's') {
    connection.write(MOVE_LEFT_KEY);
  } if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  } if (key === 'z') {
    connection.write(MSG);
  }
};

module.exports = { setupInput };