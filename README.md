# My Node.js Application

This is a simple Node.js application built using Express.js. It features a home page, a contact us page, and a product page.

## Project Structure

```
my-node-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes               # Contains route definitions
│   │   ├── home.js          # Route for the home page
│   │   ├── contact.js       # Route for the contact us page
│   │   └── product.js       # Route for the product page
│   ├── controllers          # Contains controllers for handling requests
│   │   ├── homeController.js # Controller for the home page
│   │   ├── contactController.js # Controller for the contact us page
│   │   └── productController.js # Controller for the product page
│   └── views                # Contains EJS templates for rendering views
│       ├── home.ejs        # EJS template for the home page
│       ├── contact.ejs     # EJS template for the contact us page
│       └── product.ejs     # EJS template for the product page
├── package.json             # npm configuration file
└── README.md                # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-node-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- Home page with welcome message
- Contact us page with a form
- Product page displaying product details

## License

This project is licensed under the MIT License.