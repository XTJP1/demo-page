const express = require('express')
var app = express()
app.get('/', (req, res) => {
  res.send('MNiST Study Tool')
})

app.listen(3000, () =>{
  console.log("Start server port: 3000")
})
