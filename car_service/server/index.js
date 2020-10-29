const express = require('express')
const PORT = 8001
const app = express()

app.get('/cars', (req, res) => {
  try {
    return res.json({ cars: [0,1,2,3,4,5] })
  } catch(err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', err)
    }
    return res.status(500).send({ message: 'problem getting car list'})
  }
})

app.get('/cars/:id', (req, res) => {
  try {
    const { params: { id } } = req
    return res.json({ carDetails: { id, name: 'malibu '}})
  } catch (err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', err)
    }
    return res.status(500).send({ message: 'problem getting car list'})
  }
})

try {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend listening on port ${PORT}`);
  });
} catch (err) {
  if(err) {
    console.error('api service failed unexpectedly')
    process.exit(1)
  }
}