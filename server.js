const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send({body:"Hello there"})


})


app.listen(PORT)
