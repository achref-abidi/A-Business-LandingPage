const port = 3000

var express = require('express');
var app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.use(__dirname + "/public", express.static())



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})