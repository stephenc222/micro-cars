const frisby = require('frisby');

const Joi = frisby.Joi

describe('api', function () {
  describe('/cars route', function() {
    it('should get a list of cars', function () {
      return frisby.get('http://localhost:8000/api/v1/cars')
        .expect('status', 200)
        .expect('jsonTypes', 'cars.*', Joi.number().required())
    });
  })
  describe('/cars/:id route', function() {
    it('should get a single car info', function () {
      return frisby.get('http://localhost:8000/api/v1/cars/1')
        .expect('status', 200)
        .expect('jsonTypes', 'carDetails', {
          id: Joi.number().required(),
          name: Joi.string().required(),
        })
    });
  })

})