const { generic } = require("../errors/auth");

module.exports = (...fields) => (req, res, next) => {
  for(const field of fields) {
    if(!Object.getOwnPropertyNames(req.body).filter(property => property.includes(field))) return next(generic["empty"]);
  }

  next();
};
