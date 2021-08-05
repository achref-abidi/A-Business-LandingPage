var express = require('express');
var app = express();
const port = 3000


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.use(express.static(__dirname + "/public/style"))



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})