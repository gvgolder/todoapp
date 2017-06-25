const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const crud = require('./crud')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', crud.readTask)
app.post('/', crud.createTask)
app.put('/', crud.updateTask)
app.delete('/', crud.removeTask)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})