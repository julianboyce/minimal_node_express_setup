Setup environment
================================

$ mkdir helloworld
$ cd helloword/
$ npm init -y
$ npm install --save express
$ sudo npm install --save nodemon

Create server.js file
================================

const express = require("express")
const app = express()
app.get("/", function(req, res) {
    res.send("Hello World")
})
console.log("Express server listening on port 3000");
app.listen(3000)

Create directories for static content
================================
$ mkdir public
$ mkdir public/images
$ mkdir public/css
$ mkdir public/js

Serving static files in Express
================================
Resource: https://expressjs.com/en/starter/static-files.html

Add to your server.js file
app.use(express.static('public'))

Test on localhost
================================
$ nodemon server.js
http://localhost:3000/