import app from './app'
import './database'

//init app
app.listen(app.get('port'));

console.log('Servidor en el puerto', app.get("port"));

