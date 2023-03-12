const express = require("express");
const app = express();
const port = 80;

app.use("/static", express.static("static"));           // for serving static files

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.status(200).render("index");
});


app.listen(port, () => {} );
