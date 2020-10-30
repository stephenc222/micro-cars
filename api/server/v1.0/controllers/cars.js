const fetch = require('node-fetch')

const { CAR_SERVICE_DOMAIN = 'localhost', CAR_SERVICE_PORT = 8001, PORT = 8000 } = process.env

const getCarServiceList = (req, res) => {
  try {
    return fetch(`http://${CAR_SERVICE_DOMAIN}:${CAR_SERVICE_PORT}/api/v1/cars`)
      .then(res => res.json())
      .then(body => res.send({...body}))
      .catch(err => {
        if (err) {
          console.error('GET ERROR:', `${err}`)
          return res.status(500).send({ message: 'problem getting car list'})
        }
      })
  } catch(err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', `${err}`)
    }
    return res.status(500).send({ message: 'problem getting car details'})
  }
}

const getCarServiceById = (req, res) => {
  try {
    const { params: { id } } = req
    return fetch(`http://${CAR_SERVICE_DOMAIN}:${CAR_SERVICE_PORT}/api/v1/cars/${id}`)
      .then(res => res.json())
      .then(body => res.send({ ...body }))
      .catch(err => {
        if (err) {
          console.error('GET ERROR:', `${err}`)
          return res.status(500).send({ message: 'problem getting car details'})
        }
      })
  } catch (err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', `${err}`)
    }
    return res.status(500).send({ message: 'problem getting car details'})
  }
}

module.exports = {
  getCarServiceList,
  getCarServiceById
}