const os = require('os')
const express = require('express')
const cors = require('cors')

const PORT = 8080
const CORS_CONFIG = {
  origin: 'http://localhost:8000'
}

const app = express()

app.use(express.json())

app.options('/greet', cors(CORS_CONFIG))

app.post('/greet', cors(CORS_CONFIG), (req, res) => {
  const fullName = `${req.body.first_name} ${req.body.last_name}`
  console.log(fullName)

  res.json({ name: fullName })
})

app.listen(PORT, () => {
  console.log(`Server running at http://${os.hostname()}:${PORT}/`)
})
