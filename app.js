const express = require("express")
const path = require("path")
//const express = require("ejs")

const app = express()

//view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index")
})


app.get("/about", (req, res) => {
    res.render("About")
})


app.listen(8000, () => {
    console.log("listening on port 8000")
})