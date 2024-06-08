# node_microservices ( e-commerce )

Building an e-commerce application, that can

* List all the available products
* User sign-in and sign-up
* Adding products to the wishlist
* Placing an order, &
* Viewing placed orders

## Architecture

![1715022186426](image/README/1715022186426.png)

### Design Pattern:

#### [CQRS](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs "Azure: CQRS Pattern"): Command Query Responsibility Segregation

* Separates read and update operations from the data store.
* "In CQRS, the system can be divided into separate data models for both commands and queries. Commands operate on something known as the write model, while queries operate on the read model. It is common to have many different read models, each looking at the data from a different perspective." [[confluent](https://www.confluent.io/learn/cqrs/#:~:text=In%20CQRS%2C%20the%20system%20can,data%20from%20a%20different%20perspective. "Confluent: What is CQRS")]

![1715024088753](image/README/1715024088753.png)

**API Layer:** For validating user requests | **Services Layer:** processing business logic on data | **Data Layer:** for database related operations.

## File Structure & Dependencies

* customer
  * src
    * api
    * config
    * database
    * services
    * utils
    * app-error.js
    * error-handler.js
    * index.js
* products
  * src
    * ...
* shopping
  * src
    * ...
* .env
* .env.dev
* README.md

Each microservices has dependenices of `dotenv`, `express`, `cors`, and  `nodemon` as dev dependency and can be installed by,

`npm i dotenv express cors ; npm i nodemon -D`

on each directory ( **customer, products, shopping** ). And gateway is a aggregation service that let requests reach each intended services by the endpoint, **gateway** has dependency of

`npm i express cors express-http-proxy; npm i nodemon -D`

**Documentation:** [express](https://expressjs.com/ "express : documentation") | [cors](https://www.npmjs.com/package/cors "cors : npm") | [dotenv](https://www.npmjs.com/package/dotenv "dotenv : npm") | [nodemon](https://www.npmjs.com/package/nodemon "nodemon : npm") | [express-http-proxy](https://www.npmjs.com/package/express-http-proxy "express-http-procy : npm") | [winston](https://www.npmjs.com/package/winston "winston : npm") 

**Project specific Documentation:** 

* **Error Handling**
*
