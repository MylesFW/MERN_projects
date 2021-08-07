const productController = require("../controllers/product.controller")

// (app) goes to the const app in the server.js
module.exports = (app) => {
    // leading slash '/api/destinations' is required
        // 'api/destinations' will not work
    // call this function whenever this URL is visited
        // 'destinationController.create()' would excute the function immedietly
        // 'function()' is a "callback function"
    app.post("/api/products", productController.create);
    app.get("/api/products", productController.getAll);
    app.get("/api/products/:id/edit", productController.getOne);
    app.delete("/api/products/:id", productController.delete);
    app.put("/api/products/:id", productController.update);
    
};