const { Skill } = require('../models');

const skillController = {
  async getAll(req, res, next) {
    try {
      const skills = await Skill.findAll();
      res.send(skills);
    } catch (error) {
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
