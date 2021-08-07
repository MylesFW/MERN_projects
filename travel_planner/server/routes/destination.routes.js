const desinationController = require("../controllers/desination.controller")

// (app) goes to the const app in the server.js
module.exports = (app) => {
    // leading slash '/api/destinations' is required
        // 'api/destinations' will not work
    // call this function whenever this URL is visited
        // 'destinationController.create()' would excute the function immedietly
        // 'function()' is a "callback function"
    app.post("/api/destinations", desinationController.create);
    app.get("/api/destinations", desinationController.getAll);
    app.get("/api/destinations/:id", desinationController.getOne);
    app.delete("/api/destinations/:id", desinationController.delete);
    app.put("/api/destinations/:id", desinationController.update);
    
};