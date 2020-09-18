const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//const User = require('../models/user.model');

require('../models/user.model');
const User = require('mongoose').model('User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    //Confirmar si coincide email
    const user = await User.findOne({ email });
    if(!user) {
        return done(null, false, { message: 'Correo no encontrado' });
    }else {
    //Validar contraseña
    const match =  await user.matchPassword(password);
        if(match){
            return done(null, user);
        }else {
            return done(null, false, { message : 'Contraseña incorrecta, vuelva a intentarlo' });
        }
    }
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});