E-commerce Application Report

Project Overview
This project is a full-stack e-commerce application built with the following technologies:

Frontend:
- Angular 19 (Standalone Components) with NgRx for state management.

Backend:
- .NET Core Web API with Entity Framework Core and SQL Server.

Microservices:
- Product Microservice: Manages product catalog (CRUD operations).
- Order Microservice: Handles customer orders (CRUD operations).

-------------------------------

Frontend (Angular)

Features:
Product Management:
- View product list.
- Add, edit, and delete products.
- Form validation and error handling.

Order Management:
- Place orders.
- View order history.
- Checkout functionality.

State Management:
- NgRx for managing product and order states.
- Effects for handling API calls.
- Selectors for accessing state.

Key Components:
- Product List: Displays all products with edit/delete options.
- Product Form: Handles adding and editing products.
- Order List: Displays all orders with details.
- Checkout: Allows users to place orders.

Technologies Used:
- Angular 19 (Standalone Components).
- NgRx (Store, Effects, Actions, Reducers, Selectors).
- Reactive Forms.
- Angular Router.

-------------------------------

Backend (.NET Core)

Product Microservice

Endpoints:
- GET /api/products: Get all products.
- POST /api/products: Create a new product.
- PUT /api/products/{id}: Update an existing product.
- DELETE /api/products/{id}: Delete a product.

Database:
- SQL Server with Entity Framework Core.

Features:
- CRUD operations for products.
- AutoMapper for DTO mapping.
- Swagger for API documentation.

-------------------------------

Order Microservice

Endpoints:
- GET /api/orders: Get all orders.
- POST /api/orders: Create a new order.

Database:
- SQL Server with Entity Framework Core.

Features:
- CRUD operations for orders.
- AutoMapper for DTO mapping.
- Swagger for API documentation.

-------------------------------

Technologies Used:
- .NET Core Web API.
- Entity Framework Core (Code First).
- SQL Server.
- AutoMapper.
- Swagger/OpenAPI.