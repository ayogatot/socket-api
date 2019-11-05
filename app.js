require("dotenv").config();

const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1> HELLO WORLD <h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
