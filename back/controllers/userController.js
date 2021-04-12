const { User, TestMade } = require('../models');

const userController = {
  register: async (req, res, next) => {
    try {
      const userCreated = await User.create(req.body);
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
      })
      if (userFound) {
        res.send(userFound);
      } else {
        res.status(401).send('Hubo un error');
      }
    } catch (error) {
      next(error);
    }
  },

  saveResult: async (req, res, next) => {
    try {
      const newResult = await TestMade.create({...req.body})
      res.status(201).send(newResult);
    } catch (error) {
      next(error);
    }
  }

};

module.exports = userController;
