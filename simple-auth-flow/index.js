require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./configs/db");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(); // require your services inside

app.use((_, __, next) => {
  next({
    statusCode: 404,
    error: new Error("path not found"),
  });
});

app.use(({ statusCode, error }, _, res, __) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

app.listen(process.env.PORT, () =>
  console.info("> listening at: ", process.env.PORT)
);
