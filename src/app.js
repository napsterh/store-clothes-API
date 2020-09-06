import express from 'express';
import morgan from 'morgan';

const app = express()
import productRoutes from './routes/products.routes'

// settings
app.set("port", process.env.PORT || 3000);

app.use(morgan('dev'))
app.use(productRoutes)


export default app;