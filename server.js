const express = require("express")
const app = express()

// Setup Serving static files in Express 
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.get("/", function(req, res) {
    res.send("Hello World")
})
console.log("Express server listening on port 3000");
app.listen(3000)