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

### User Service
This service is responsible for managing users in our systems, they may come from integrations with Salesforce, or any other User ingestion service. 

### Shopping Cart Service

This service tracks shopping carts in our system, each cart belongs to a user, and this information can be used to send the specified owners of shopping carts special discounts.

### Inventory Service

This service is responsible for managing our inventory, allowing products to be added and have their availability tracked.