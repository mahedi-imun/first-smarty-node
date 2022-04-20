const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
const users = [
  { id: 1, name: 'rohim' },
  { id: 2, name: 'korim' },
  { id: 3, name: 'jorim' },
  { id: 4, name: 'lorim' },
  { id: 5, name: 'forim' },
  { id: 6, name: 'torim' },
]

app.get('/', (req, res) => {
  res.send('Hello smaty node vai')
})

app.get('/users', (req, res) => {
  res.send(users)

})
app.post('/user', (req, res) => {
  console.log(req.body);

})
app.get('/user/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(u => u.id == id)
  res.send(user)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})