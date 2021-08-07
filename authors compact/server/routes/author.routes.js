const authorController = require("../controllers/author.controller")

// (app) goes to the const app in the server.js
module.exports = (app) => {
    // leading slash '/api/destinations' is required
        // 'api/destinations' will not work
    // call this function whenever this URL is visited
        // 'destinationController.create()' would excute the function immedietly
        // 'function()' is a "callback function"
    app.post("/api/authors", authorController.create);
    app.get("/api/authors", authorController.getAll);
    app.get("/api/authors/:id", authorController.getOne);
    app.delete("/api/authors/:id", authorController.delete);
    app.put("/api/authors/:id", authorController.update);
    
};