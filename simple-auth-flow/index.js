require("dotenv").config();
const cors = require("cors")
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./configs/db");
const errors = require("./errors/commons")
const app = express();
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

app.use("/", require("./services")(db));

app.use((_, __, next) => {
  next(errors[404]);
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
