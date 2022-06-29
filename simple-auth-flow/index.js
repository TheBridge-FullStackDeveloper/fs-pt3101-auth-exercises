require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./configs/db");
const app = express();
const cors = require("cors");

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/", require("./services")(db)); // require your services inside


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
