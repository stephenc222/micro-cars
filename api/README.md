# Micro Cars

## Getting Started

install `docker` and `docker-compose`, then run `docker-compose build` followed by `docker-compose up`.

Next, while the `api` and `car_service` are running, in a separate terminal, there are 2 routes exposed from the api service to external consumers (running on localhost, port 9001):

### `/api/v1/cars`

gets the list of cars

### `/api/v1/cars/:id`

gets the details for a particular car with the given id.

## Testing

Testing is managed by jest, and each package `api` and `car_service`, have their own testing scripts. For convenience, there is a `test.sh` at the root of this repo, runnable with `sh ./test.sh`