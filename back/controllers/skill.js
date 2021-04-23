const { Skill } = require('../models');
const { Op } = require('sequelize')

const skillController = {
  
  async getAll(req, res, next) {
    try {
      const skills = await Skill.findAll();
      res.send(skills);
    } catch (error) {
      next(error);
    }
  },
  
  async getIndex(req, res, next) {
    try {
      let limit = req.params.limit;
      let start = limit - 30
      const skills = await Skill.findAll({
        where: {
          id: {
            [Op.between]: [start, limit]
          }
        }
      });
      res.send(skills);
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  async getOne(req, res, next) {
    try {
      const skill = await Skill.findOne({
        where: {
          pId: req.params.id,
        },
      });
      console.log("skill",skill)
      res.send(skill);
    } catch (error) {
      next(error);
    }
  },
  async addTest(req, res, next) {
    try {
      const skillUpdated = await Skill.update(
        { hasTest: true },
        {
          where: {
            pId: req.params.id,
          },
        },
      );
    } catch (error) {
      next(error);
    }
  },
};

module.exports = skillController;
