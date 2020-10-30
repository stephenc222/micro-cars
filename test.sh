#!/usr/bin/env bash

# start the servers used by frisby.js
npm start --prefix api &
api_pid=$!
npm start --prefix car_service &
car_service_pid=$!

# run tests
cd api && command npm run test \
&& cd ../car_service && command npm run test \
&& echo "tests ran successfully, shutting down services..."
kill $api_pid
kill $car_service_pid