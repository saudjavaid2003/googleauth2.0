const express = require("express");
const passport = require("passport");

const router = express.Router();

// Route for initiating Google authentication
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Route for handling the callback from Google
router.get("/google/callback", 
    passport.authenticate("google", { failureRedirect: "/" }), // Redirect to homepage on failure
    (req, res) => {
        // On successful authentication, redirect to the desired page
        res.redirect("/dashboard");
    }
);

module.exports = router;
