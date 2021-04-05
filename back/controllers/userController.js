const { User, TestMade } = require('../models');

const userController = {
  register: async (req, res, next) => {
    try {
      const userCreated = await User.create(req.body);
      console.log(req.body, '<------ ESTO ES EL BODY EN EL BACK');
      res.status(201);
      return res.send(userCreated);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const userFound = await User.findOne({
        where: {
          mail: req.body.mail,
        },
      });
      if (userFound.log(req.body.mail, req.body.password)) {
        res.send('Loged');
      } else {
        res.status(401).send('Hubo un error');
      }
    } catch (error) {
      next(error);
    }
  },

  saveResult: async (req, res, next) => {
    try {
      console.log(req.body);
      const newResult = await TestMade.create({...req.body})
      res.status(201).send(newResult);
    } catch (error) {
      next(error);
    }
  }

};

module.exports = userController;
