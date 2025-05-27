import User from "../model/UserModel.js";

// GET all users
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json({
      status: "Success",
      message: "Users retrieved",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

// GET user by ID
async function getUsersById(req, res) {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User tidak ditemukan 😮",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "User retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

// POST new user (Register)
async function createUser(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: "Error",
        message: "Field tidak boleh kosong 😠",
      });
    }

    const newUser = await User.create({ username, password });

    return res.status(201).json({
      status: "Success",
      message: "User Registered",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}


// POST login (no token, no hash)
async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username, password },
    });

    if (!user) {
      return res.status(400).json({
        status: "Error",
        message: "Username atau password salah",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Login berhasil",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

export {
  getUsers,
  getUsersById,
  createUser,
  login,
};
