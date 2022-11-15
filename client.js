const net = require("net");

// establishes a connection with the game server
const connect = function () {
  //conn object in the connect function allow us to interact with the server
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',

  });

  conn.on('data', (data) => {
  // code that does something when the connection is first established
      console.log(data);
  });

  conn.on('connect', () => {
  // code that does something when the connection is first established
      console.log("Successfully connected to game server");
      conn.write("Name: MMA");

  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};


module.exports = {connect};