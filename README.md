

# BookShop API

A backend API for managing a bookshop, including features for adding books, managing orders, and calculating revenue.

## Features

- **Book Management**:  
  Add books with fields such as:
  - Title
  - Author
  - Price
  - Category
  - Description
  - Quantity
  - Stock status  
  Input validation includes:
  - Required fields
  - Maximum length constraints
  - Restricting categories to a predefined list (e.g., Fiction, Science, SelfDevelopment).

- **Order Management**:  
  - Create orders with fields like:
    - Email
    - Product ID
    - Quantity
    - Total price  
  - Validate orders using schema validation (Zod).
  - Automatically update book stock upon order placement.

- **Revenue Calculation**:  
  - Calculate total revenue from all orders placed in the system.

- **Error Handling**:  
  - Return appropriate HTTP status codes and error messages for validation errors and system exceptions.

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (local or hosted, e.g., MongoDB Atlas)

## API Endpoints

### Books
- `POST /api/products`: Add a new book.  
  Example Request:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "price": 15.99,
    "category": "Fiction",
    "description": "A great book",
    "quantity": 50,
    "inStock": true
  }


### Get All Books
- `GET/api/products`  

###  Get a Specific Book
- `Get/api/products/:productId` 

### Books
- `Put /api/products/:productId`
### Delete a Book
- `Delete /api/products/:productId`
### Order a Book
- `POST /api/orders`: Add a new book.  
  Example Request:
  ```json
  {
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
  }
 
### Calculate Revenue
- `Get /api/orders/revenue`: Add a new book.  
 

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Validation**: Zod
- **ODM**: Mongoose

## How to Deploymeny
- Install the Vercel CLI if not already installed:
   ```bash
  npm install -g vercel
- Run the following commands
   ```bash
  vercel login
  vercel -prod



