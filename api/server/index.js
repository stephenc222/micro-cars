const express = require('express')
const fetch = require('node-fetch')
const PORT = 8000
const app = express()

app.get('/cars', (req, res) => {
  try {
    return fetch('http://car_service:8001/cars')
      .then(res => res.json())
      .then(body => res.send({...body}))
      .catch(err => {
        if (err) {
          console.error('GET ERROR:', err)
          return res.status(500).send({ message: 'problem getting car list'})
        }
      })
  } catch(err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', err)
    }
    return res.status(500).send({ message: 'problem getting car details'})
  }
})

app.get('/cars/:id', (req, res) => {
  try {
    const { params: { id } } = req
    return fetch(`http://car_service:8001/cars/${id}`)
      .then(res => res.json())
      .then(body => res.send({...body}))
      .catch(err => {
        if (err) {
          console.error('GET ERROR:', err)
          return res.status(500).send({ message: 'problem getting car details'})
        }
      })
  } catch (err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', err)
    }
    return res.status(500).send({ message: 'problem getting car details'})
  }
})

try {
  app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
  });
} catch (err) {
  if(err) {
    console.error('api service failed unexpectedly')
    process.exit(1)
  }
}