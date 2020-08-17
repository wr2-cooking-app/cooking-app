require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require("./controllers/authCtrl");
const testCtrl = require("./controllers/spoonacularTestCtrl");

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
  })
);

app.use(express.json());

//auth endpoints

// TEMPORARY TESTING ENPOINTS
app.get("/test/spoonacular", testCtrl.testQuery);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
