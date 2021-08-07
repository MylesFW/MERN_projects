const postController = require("../controllers/post.controller")

// (app) goes to the const app in the server.js
module.exports = (app) => {
    // leading slash '/api/destinations' is required
        // 'api/destinations' will not work
    // call this function whenever this URL is visited
        // 'destinationController.create()' would excute the function immedietly
        // 'function()' is a "callback function"
    app.post("/api/posts", postController.create);
    app.get("/api/posts", postController.getAll);
    app.get("/api/posts/:id", postController.getOne);
    app.delete("/api/posts/:id", postController.delete);
    app.put("/api/posts/:id", postController.update);
    
};