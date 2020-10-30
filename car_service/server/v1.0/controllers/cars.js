const fs = require('fs')
const path = require('path')

const getCarList = (req, res) => {
  try {
    return fs.readFile(path.join(path.dirname(require.main.filename), 'data/cars.json'), (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).send({ message: 'problem getting car list'})
      }
      const resData = JSON.parse(data)
      return res.json({ cars: resData })
    })
  } catch(err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', err)
    }
    return res.status(500).send({ message: 'problem getting car list'})
  }
}

const getCarById = (req, res) => {
  try {
    const { params: { id } } = req
    return fs.readFile(path.join(path.dirname(require.main.filename), 'data/cars.json'), (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).send({ message: 'problem getting car list'})
      }
      const resData = JSON.parse(data)
      const carDetails = resData.find( item => item.id === parseInt(id))
      if (carDetails) {
        return res.json({ carDetails })
      }
      return res.status(404).send({message: `car not found with id: ${id}`})
    })
  } catch (err) {
    if (err) {
      console.error('ERROR: /cars/:id failed', err)
    }
    return res.status(500).send({ message: 'problem getting car list'})
  }
}

module.exports = {
  getCarList,
  getCarById
}