const express = require('express')
const app = express()
const crud = require('./crud')

app.get('/', crud.readTask)
app.post('/', crud.createTask)
app.put('/', crud.updateTask)
app.delete('/', crud.removeTask)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})