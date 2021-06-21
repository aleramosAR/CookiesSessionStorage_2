export const auth = function(req, res, next) {
  if (req.session.usuario) {
    return next();
  } else {
    res.redirect('/unauthorized');
  }
}

export const authAPI = function(req, res, next) {
  if (req.session.usuario) {
    return next();
  } else {
    res.status(401).send({ error: 'No autorizado' });
  }
}