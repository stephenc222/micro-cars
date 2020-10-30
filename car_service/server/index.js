const express = require('express')
const v1Router = require('./v1.0')
const app = express()
const router = express.Router()

const { PORT = 8001 } = process.env

app.use('/api', router)
router.get('/v1/cars', v1Router.getCarList)
router.get('/v1/cars/:id', v1Router.getCarById)

app.get('/*', (req, res) => {
  return res.status(404).send({ message: 'not found'})
})

try {
  app.listen(`${PORT}`, '0.0.0.0', () => {
    console.log(`Backend listening on port ${PORT}`);
  });
} catch (err) {
  if(err) {
    console.error('api service failed unexpectedly')
    process.exit(1)
  }
}