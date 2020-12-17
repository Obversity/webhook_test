const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3030

app.use(bodyParser.json({limit: '200mb'}))

app.post('/', (req, res) => {
  console.log(req.body)
  res.send("Done!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
