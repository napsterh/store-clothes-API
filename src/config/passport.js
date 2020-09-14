const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user.model')

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