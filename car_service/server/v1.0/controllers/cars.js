const getCarList = (req, res) => {
  try {
    return res.json({ cars: [0,1,2,3,4,5] })
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
    return res.json({ carDetails: { id, name: 'malibu '}})
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