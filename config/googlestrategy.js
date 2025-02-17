const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile); // Store the entire profile in the session
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // Save only the user ID in the session
});

passport.deserializeUser((id, done) => {
  // In a real application, find the user in DB using the ID
  done(null, { id }); // For now, returning an object with just the ID
});

module.exports = passport;
