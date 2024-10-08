# rest-api
    // This Rest-Api design concept comes from Stack Learner's Full Stack Army.

# API Design
    * Rest API
    * GraphQL
    * gRPC
    * SOAP (less then 1%)
    * Web socket (tough to manage)
    * Message Broker (not beginer friendly concept)
# API Security
    * JWT Token
    * Refresh Token
    * OAuth2
    * SAML
    * Identity Providers (Cognito, Auth0, Firebase, Okta)
    * Role based Authorization
# API Testing
    * Unit Testing
    * Acceptence Testing
    * Load Testing
# API Documentation
    * Swagger
    * Postman
# Database
    * NoSQL
        * MongoDB
        * AWS DynamoDB
    * SQL
        * Postgre SQL
        * My SQL
        * MSSQL/Oracle
    * In Memory
        * Redis
        * Mem Cached
    * Graph Database
        * Neo4J
# Linux Server
# Cloud Computing
# DevOps



# Server Application Responsibilities
    * Listen Request 
    * Process
    * Response
# HTTP
    * GET - Read data from server
    * POST - Create new data
    * PUT/PATCH - Update existing data 
    * DELETE - Delete data from database

# Routing Pattern
    * GET everything - /users
    * GET one user - /users/userId
    * POST new user - /users
    * Update user - /users/userId
    * Delete user - /users/userId

# Request =>(Middleware = logger, body parser, file parser, authentication, user ip, block ip, authorization, validation) Controller (Middleware = error handler) => Response

# Middleware
    * This is just a Controller Function. middleware can response from any end and reuseble.
    // req -> M1 -> M2 -> M3 -> res
    - Signature of a basic middleware
    * we will never call this function , express will automatically invoke it for us
    * function xyz (req, res, next) {
    next()
    // Middleware call next function
    }
# Controller function
    * function xyz (req, res, next) {
    res.send/json()
    // controller call res item
    }
# Project Structure
    - The best application structure is Monolithic Architecture. 
    - The Clean code Architecture.
# Project Error first pattern
    * app.use((_req, _res, next)=>{
        const error = new Error("Resource not found")
        error.status = 404
        next(error)
    })
    * app.use((error, _req, res, _next)=>{
    if (error.status){
       return res.status(error.status).json({"message": error.message})
    }
    res.status(500).json({"message": error.message})
    })

# Lottery API Project
    - Sell Lottery Tickets
    - Update lottery tickets
    - delete lottery tickets
    - get all tickets
    - get ticket by id
    - bulk buy (user can buy multiple tickets at a time)
    - raffle draw

# Project requirements
    - Unique id
    - User name
    - Price
    - timestamps
# Routes
    - /tickets/sell - create lottery
    - /tickets/bulk - bulk ticket sell
    - /tickets/t/:ticketId -GET-find single ticket
    - /tickets/t/:ticketId -PATCH- update ticket by id
    - /tickets/t/:ticketId -DELETE- delete single ticket by id
    - /tickets/u/:username -GET- find single ticket by userName
    - /tickets/u/:username -PATCH- update tickets for a given user
    - /tickets/u/:username -DELETE- delete all tickets for a given user
    - /tickets/draw
    - /tickets - find all lottery

# Project is ready for backend
    