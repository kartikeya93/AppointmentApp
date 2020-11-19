const usersController = require("../controllers").users;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the User API!",
    })
  );

  app.post("/api/users", usersController.create);
  app.get("/api/users", usersController.list);
  app.get("/api/users/:id", usersController.retrieve);
  app.put("/api/users/:id", usersController.update);
};
