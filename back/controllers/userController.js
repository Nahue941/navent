const { User, TestMade } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userController = {
  register: async (req, res, next) => {
    try {
      const userCreated = await User.create(req.body);
      res.status(201).send(userCreated);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { mail, password } = req.body;
      const userFound = await User.findOne({
        where: {
          mail,
        },
      });
      if (!userFound || !userFound.validatePassword(password)) {
        res
          .status(401)
          .send(
            'El email no está registrado en la DB o la contraseña es incorrecta',
          );
      }
      jwt.sign(
        {
          id: userFound.id,
          mail: userFound.mail,
          admin: userFound.admin,
        },
        process.env.SECRET,
        (err, token) => res.json(token),
      );
    } catch (error) {
      next(error);
    }
  },
  saveResult: async (req, res, next) => {
    try {
      const newResult = await TestMade.create({ ...req.body });
      res.status(201).send(newResult);
    } catch (error) {
      next(error);
    }
  },
  me: async (req, res, next) => {
    try {
      const user = await User.findByPk(req.user.id);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  searchByName: async (req, res, next) => {
    try {
      const name = req.params.name;
      const user = await User.findOrCreate(
        {
          where: {
            name,
          },
          defaults: {
            name,  
            mail: `${name}@mail.com`, 
            external: true, 
            password: `1234`
          }
        }
      );
      res.send(user);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
