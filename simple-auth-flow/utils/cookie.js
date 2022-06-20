//new Date me da dos horas antes de las que debería,
//intenté con moment pero hay que pasarlo a Date 
//para cookies expire
//const moment = require('moment')

const create = (res, token, extTime = 30000000) => {
  res.cookie("access_token", token, {
    expires: new Date(Date.now() + extTime),
    secure: false,
    httpOnly: true,
  });
};


const clear = (res) => {
  res.clearCookie("access_token");
};

module.exports = {
  create,
  clear,
};