const express = require("express");
const authRoute = require("./routes/authroute");
const passport = require("passport");
const expressSession = require("express-session");
const connectdb = require("./config/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ First, setup express-session before passport
app.use(expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false
}));

// ✅ Then, initialize Passport
app.use(passport.initialize());
app.use(passport.session());

connectdb();
require("./config/googlestrategy")


app.use("/auth", authRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
