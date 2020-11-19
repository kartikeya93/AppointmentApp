const User = require("../models").User;

module.exports = {
  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      fitnessGoal: req.body.fitnessGoal,
      currentFitness: req.body.currentFitness,
      height: req.body.height,
      weight: req.body.weight,
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return User.findAll()
      .then((users) => res.status(200).send({ users }))
      .catch((error) => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User.findByPk(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found",
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return User.findByPk(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found",
          });
        }
        return user
          .update({
            firstName: req.body.firstName || user.firstName,
            lastName: req.body.lastName || user.lastName,
            email: req.body.email || user.email,
            phone: req.body.phone || user.phone,
            password: req.body.password || user.password,
            dateOfBirth: req.body.dateOfBirth || user.dateOfBirth,
            gender: req.body.gender || user.gender,
            fitnessGoal: req.body.fitnessGoal || user.fitnessGoal,
            currentFitness: req.body.currentFitness || user.currentFitness,
            height: req.body.height || user.height,
            weight: req.body.weight || user.weight,
          })
          .then(() => res.status(200).send(user)) // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
