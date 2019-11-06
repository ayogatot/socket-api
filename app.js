require("dotenv").config();

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const data = require("./datas/msg");
const { sendResponse } = require("./helpers/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.attach(http, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

io.on("connection", socket => {
  socket.on("message", msg => {
    io.emit("message", msg);
  });
});

app.get("/v1", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/v1/messages", (req, res) => {
  try {
    sendResponse(res, 200, false, null, data);
  } catch (error) {
    sendResponse(res, 500, true, error, []);
  }
});

app.post("/v1/messages", (req, res) => {
  try {
    const { message } = req.body;
    data.message.push(message);

    io.emit("message", message);
    sendResponse(res, 200, false, null, data);
  } catch (error) {
    sendResponse(res, 500, true, error, []);
  }
});

http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
