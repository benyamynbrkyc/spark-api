// authenticate if the user object exists on the request
const authUser = (req, res, next) => {
  if (req.user == null) {
    res.status(403);
    return res.send('You need to sign in');
  }

  next();
};

// use when authUser completes, authenticate if the user is an admin or a regular customer
const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send('Not allowed');
    }

    next();
  };
};

module.exports = { authUser, authRole };
