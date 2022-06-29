const { getFullUser } = require("../../queries/auth");
const errors = require("../../errors/commons");

module.exports = (db) => async (_, res, next) => {
  const { email } = res.locals;
  console.log(email)

  const queryResult = await getFullUser(db)({ email });

  if (!queryResult.ok) return next(errors[400]);

  res.status(200).json({
    success: true,
    message: "test",
    queryResult,
  });
};
