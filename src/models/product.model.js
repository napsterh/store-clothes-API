import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    imagenURL: String,
    imagenMarcaURL: String,
    categoria: String,
    precio: String,
    descuento: {
        type: Number,
        default: 0
    },
    sku: String,
    cantDisponible: {
        type: String,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Product', productSchema)
