# Lesson - Microservices

In this lesson we'll look at a microservices application utilizing [Express Gateway](https://www.express-gateway.io/) as our API gateway, fronting two simple node.js services.

[Component Diagram](https://drive.google.com/file/d/1AOFZuwlm8veRhAvvE36qr0prOPoWxDNR/view?usp=sharing)

![Component Diagram](diagrams/lesson-microservices.svg)

## Resources

1. [Microsoft: Microservices Architecture](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)
1. [Dockerizing a Node.js web App](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## Useful commands

1. `curl -i localhost:8080/carts`
1. `curl -i localhost:8080/users`

### Express Gateway (Express.js based API Gateway)
1. `cd api-gateway`
1. `docker build . -t <your-username>/express-gateway`
1. `docker run -p 8080:8080 --name api-gateway -d <your-username>/express-gateway`
1. `docker logs <container-id>`

### User Service
1. `cd user-service`
1. `docker build . -t <your-username>/user-service`
1. `docker run -p 8081:8080 --name user-service -d <your-username>/user-service`
1. `docker logs <container-id>`

### Shopping Cart Service

1. `cd shopping-cart-service`
1. `docker build . -t <your-username>/shopping-cart-service`
1. `docker run -p 8082:8080 --name shopping-cart-service -d <your-username>/shopping-cart-service`
1. `docker logs <container-id>`