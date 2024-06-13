import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email", "notelp"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, notelp, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Konfirmasi Password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name: name,
      email: email,
      notelp: notelp,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "Email tidak ditemukan" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Password Salah" });

    const { id, name, email, notelp } = user;

    const accessToken = jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15s",
    });
    const refreshToken = jwt.sign({ id, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan saat login" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  try {
    const user = await Users.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user) return res.sendStatus(204);

    await Users.update(
      { refresh_token: null },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.clearCookie("refreshToken");
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan saat logout" });
  }
};
