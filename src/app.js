import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRoutes from './routes/products.routes';
import userRoutes from './routes/user.routes';
const session = require('express-session');
const passport = require('passport');

// Iniciatization
const app = express();
require('./config/passport');

// settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(productRoutes)
app.use(userRoutes);

export default app;