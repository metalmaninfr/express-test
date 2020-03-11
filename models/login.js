const jwt = require('jsonwebtoken');

const secret = "lkdjgkdjfg";


module.exports = {
  createToken: async (user) => {
    const payload = {
      iduser: user.iduser,
    }
    return await jwt.sign({payload}, secret);
  },
}
