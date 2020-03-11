const connectionP = require('../helpers/connection');

module.exports = {
  getone: async (id) => {
    let request = `
      SELECT
        iduser
      FROM
        user
      WHERE
        iduser = ?;
    `
    try {
      const connection = await connectionP.connection();
      const data = await connection.query(request, id);
      if (data.length === 0)
        throw 'no user found';
      return 'user found';
    } catch (error) {
      throw error;
    }
  },
  add: async (user) => {
    let request = `
      INSERT INTO
        user
      SET
        password = ?,
        username = ?,
        email = ?,
        lastName = ?,
        name = ?;
    `
    try {
      const connection = await connectionP.connection();
      const addData = await connection.query(request, [
        user.password,
        user.username,
        user.email,
        user.lastName,
        user.name,
      ])
      return addData;
    } catch (error) {
      throw error;
    }
  },
  get: async () => {
    let request = `
      SELECT
        username,
        email,
        lastName,
        name,
        status,
        iduser
      FROM
        user;
    `
    try {
      const connection = await connectionP.connection();
      const data = await connection.query(request);
      return data;
    } catch (error) {
      throw error;
    }
  },
  update: async (user, id) => {
    let request = `
      UPDATE
        user
      SET
        name = ?,
        lastName = ?,
        password = ?,
        email = ?,
        username = ?
      WHERE
        iduser = ?;
    `
    try {
      const connection = await connectionP.connection();
      const data = await connection.query(request, [
        user.name,
        user.lastName,
        user.password,
        user.email,
        user.username,
        id
      ]);
      console.log(data);
      return 'user updated';
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    let request = `
      DELETE FROM
        user
      WHERE
        iduser = ?;
    `
    try {
      const connection = await connectionP.connection();
      const data = await connection.query(request, [id]);
      return 'user deleted';
    } catch (error) {
      throw error;
    }
  },
  signIn: async (username, password) => {
    let request = `
      SELECT
        iduser
      FROM
        user
      WHERE
        username = ?
      AND
        password = ?;
    `
    try {
      const connection = await connectionP.connection();
      const user = await connection.query(request, [username, password]);
      if (user.length === 0)
        throw 'not found';
      return user[0];
    } catch (error) {
      throw error
    }
  }
}
