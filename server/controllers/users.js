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
};
