# Lesson - Microservices

In this lesson we'll look at a microservices application utilizing [Express Gateway](https://www.express-gateway.io/) as our API gateway, fronting two simple node.js services.

[Component Diagram](https://drive.google.com/file/d/1AOFZuwlm8veRhAvvE36qr0prOPoWxDNR/view?usp=sharing)

![Component Diagram](diagrams/lesson-microservices.svg)

## Resources

1. [Microsoft: Microservices Architecture](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)
1. [Dockerizing a Node.js web App](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## Running the system

### Running the System
1. `docker compose up --build`

### API Gateway (Express.js)

This is an _Edge Service_, meaning it allows network traffic from the outside world to reach the internal microservices on the private network.

### 3. User Service
1. `cd user-service`
1. `docker build . -t <your-username>/user-service`
1. `docker run -p 8081:8080 --name user-service --network microservices-network -d <your-username>/user-service`
1. `docker logs <container-id>`

### 4. Shopping Cart Service

1. `cd shopping-cart-service`
1. `docker build . -t <your-username>/shopping-cart-service`
1. `docker run -p 8082:8080 --name shopping-cart-service --network microservices-network -d <your-username>/shopping-cart-service`
1. `docker logs <container-id>`