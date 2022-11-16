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
    connection.write('Move: up');
  } if (key === 'a') {
    connection.write('Move: left');
  } if (key === 's') {
    connection.write('Move: down');
  } if (key === 'd') {
    connection.write('Move: right');
  } if (key === 'z') {
    connection.write('Say: I\'m gonna get you!');
  }
};

module.exports = { setupInput };