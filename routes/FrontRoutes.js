import express from "express";
import { auth } from '../middlewares/Middlewares.js';

const router = express.Router();

router.get('/', function(req, res){
  res.redirect('/login');
});

router.get("/index", auth, (req, res) => {
  res.render("index", { usuario: req.session.usuario });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.render("logout", { usuario: req.session.usuario });
});

router.get("/unauthorized", (req, res) => {
  res.render("unauthorized");
});

export default router;