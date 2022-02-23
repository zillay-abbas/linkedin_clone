const app = require("./app");
const http = require('http').Server(app);

const io = require("socket.io")(http,{ cors: {origin: "*"}} );

// const io = new Server(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});

