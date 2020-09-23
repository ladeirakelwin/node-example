const express = require('express')
const app = express()


app.get("/", (req, res) => {
  res.send("<h1>Hello World<h1>")
})

app.listen(process.env.PORT || 5000, () => console.log("Funfo!"))