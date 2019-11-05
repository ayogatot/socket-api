require("dotenv").config();

const app = require("express")();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const msgRoute = require("./routes/msg");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/messages", msgRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
