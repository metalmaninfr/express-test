const userModel = require('../models/user');
const loginModel = require('../models/login');

module.exports = {
  add: async (req, res) => {
    try {
      res.send(await userModel.add(req.body));
    } catch (error) {
      res.send(error);
    }
  },
  get: async (req, res) => {
    try {
      res.send(await userModel.get());
    } catch (error) {
      res.send(error);
    }
  },
  update: async (req, res) => {
    try {
      await userModel.getone(req.params.id);
      res.send(await userModel.update(req.body, req.params.id));
    } catch (error) {
      res.send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      res.send(await userModel.delete(id));
    } catch (error) {
      res.send(error);
    }
  },
  signIn: async (req, res) => {
    try {
      const { username, password } = req.body;
      
      res.send(await userModel.signIn(username, password));
    } catch (error) {
      res.sendStatus(401);
    }
  }
}
