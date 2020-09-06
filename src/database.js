import mongoose from 'mongoose';
import { MONGODB_URI } from "./config";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(db => console.log('Database conectado'))
    .catch(err => console.error(err))

