import express from "express";

const router = express.Router();

router.get("/login", async(req, res) => {
  if (!req.query.usuario) {
    res.status(422).send('Usuario no ingresado.');
  } else {
    req.session.usuario = req.query.usuario;
    res.status(200).send('Ingreso exitoso');
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ error: 'Hubo un error', body: err })
    } else {
      res.send("Logout");
    }
  })
});

export default router;