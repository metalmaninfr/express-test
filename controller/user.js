const userModel = require('../models/user');

module.exports = {
  add: async (req, res) => {
    try {
      res.send(await userModel.add(req.body))
    } catch (error) {
      console.log(error);
      res.send(error)
    }
  },
  get: async (req, res) => {
    try {
      res.send(await userModel.get())
    } catch (error) {
      res.send(error)
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
