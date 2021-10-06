const httpserver = require("http").createServer();
const io = require("socket.io")(httpserver, {
    cors: {
        origin: "http://localhost:19006",
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("chat", (args) => {
        socket.broadcast.emit("chat", args);
    });
});

httpserver.listen(3001);
