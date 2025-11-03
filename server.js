const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname));
app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "index.html")));

const port = process.env.PORT || 8003;
app.listen(port, () => console.log("listening on " + port));