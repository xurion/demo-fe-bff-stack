# Boilerplate React FE and Express BFF

Client bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Server bootstrapped with [Generate Express](https://expressjs.com/en/starter/generator.html).

## Getting Started

After cloning the project, run `yarn install` from the project root. This installs dependencies in both the `client/` and `api/` directories.

## Starting The App

The recommended way to run the app is to use Docker Compose:

```
docker-compose up
```

This runs the client and api in their respective containers. Navigate to http://localhost:3000 to see the client app. The api sits on http://localhost:9000.

Alternatively you can run `yarn start` in the `api/` directory, followed by `yarn start` in the `client/` directory in different terminal instances.

The client should display "API working fine!" if everything has worked. If not, check the network panel of your development tools.
