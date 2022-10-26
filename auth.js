const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.CALL_BACK_URL,
      passReqToCallback: true,
      profileFields: ['id', 'displayName', 'photos', 'email'],
      enableProof: true
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
