const knex = require("../conect_db");

const usersRead = async (req, res) => {
  try {
    const readUser = await knex("users").returning("*").debug();
    return res.status(201).json(readUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const getUser = await knex("users").where({ id }).first().debug();

    return res.status(201).json(getUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const usersRegister = async (req, res) => {
  const { name_user, email, password_user } = req.body;

  if (!name_user || !email || !password_user) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

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

const usersUpdate = async (req, res) => {
  const { name_user, email, password_user } = req.body;
  const { id } = req.params;

  if (!name_user || !email || !password_user) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  try {
    const foundUser = await knex("users").where({ id }).first().debug();
    if (!foundUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const changeUser = {
      name_user,
      email,
      password_user,
    };

    const updateUser = await knex("users")
      .update(changeUser)
      .where({ id })
      .returning("*")
      .debug();

    if (!updateUser) {
      return res
        .status(404)
        .json({ message: "Não foi possível atualizar usuário" });
    }
    return res.status(201).json(updateUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const usersDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await knex("users").where({ id }).first().debug();
    if (!foundUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const deleteUser = await knex("users").delete().where({ id }).debug();

    if(!deleteUser){
        return res
        .status(404)
        .json({ message: "Não foi possível deletar usuário" });
    }

    return res.status(201).json(deleteUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  usersRegister,
  usersRead,
  getUser,
  usersUpdate,
  usersDelete,
};
