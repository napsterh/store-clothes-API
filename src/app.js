import express from 'express';
import morgan from 'morgan';

const app = express()
import productRoutes from './routes/products.routes'

// settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(productRoutes)


export default app;