import User from '../models/user.model';

const passport  = require('passport');

export const renderSignUpForm = async (req, res) => {
    res.send('/users/signin')
};

export const signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_pass} = req.body;
    if(password != confirm_pass){
        //errors.push({ text: 'Contraseñas no coinciden' });
        console.log('Contraseñas no coinciden');
    }
    if(password.length < 4){
        //errors.push({ text: 'La contraseña debería ser mayor a 4' });
        console.log('La contraseña debería ser mayor a 4');
    }
    if(errors.length > 0){
        res.render('/users/signup', {
            errors,
            name,
            email,
            password,
            confirm_pass
        })
    } else {
        const emailUser = await User.findOne({email: email });
        if(emailUser){
            //req.flash('error_msg', 'El correo ingresado ya existe');
            console.log('El correo ingresado ya existe');
            res.redirect('/users/signup');
        }else {
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encryptPass(password);
            const users = await newUser.save();
            console.log('usuario registrado correctamente');
            //res.redirect('/users/signin');
            res.status(200).json({
                users,
            });
        }
    }
};

export const renderSigninForm = async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        users,
    });
};

export const signin = passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/users/signin',
    failureFlash: true
});

export const logout = (req, res) => {
    res.send('/users/logout');
};


