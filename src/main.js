// Load modules
var app = require("express")();
var cors = require("cors");
var server = require("http").createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST}"],
    allowedHeaders: "*",
    // credentials: true,
  },
});
var init = require("./init.js");

app.use(cors());
// Start Spika as stand alone server
var spika = require("./index.js");
var SpikaServer = new spika(app, io, init);

server.listen(init.port, function () {
  console.log("Server listening on port " + init.port + "!");
});
