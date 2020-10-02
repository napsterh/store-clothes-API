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
    subcategoria: String,
    tipoDescuento: String,
    categoriaExtra: String,
    precio: String,
    descuento: {
        type: Number,
        default: 0
    },
    sku: String,
    cantDisponible: {
        type: String,
        default: 0
    },
    liked: {
        type: Boolean,
        default: false
    },
    fechaFinOferta: String
}, {
    versionKey: false,
    timestamps: true
})

export default model('Product', productSchema)
