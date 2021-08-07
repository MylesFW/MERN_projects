const postController = require("../controllers/post.controller")

// (app) goes to the const app in the server.js
module.exports = (app) => {

    app.post("/api/posts", postController.create);
    app.get("/api/posts", postController.getAll);
    app.get("/api/posts/:id", postController.getOne);
    app.delete("/api/posts/:id", postController.delete);
    app.put("/api/posts/:id", postController.update);
};