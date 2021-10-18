const knex = require("../conect_db");

const usersRead = async (req, res) => {
  try {

    const readUser = await knex('users').returning('*').debug();
    return res.status(201).json(readUser);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const usersRegister = async (req, res) => {
  const { name_user, email, password_user } = req.body;

  try {
    const creatUser = {
      name_user,
      email,
      password_user,
    };

    const insertUser = await knex("users")
      .insert(creatUser)
      .returning("*")
      .debug();
    return res.status(201).json(insertUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  usersRegister,
  usersRead
};
