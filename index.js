require('dotenv').config()



const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('nandanigehlot')
})

app.get('/login', (req, res) => {
  res.send('<h1>welcome to the hello worls.<h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>welcome to the new world..<h2>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})