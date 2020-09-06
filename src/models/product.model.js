import { Schema, model } from 'mongoose'


const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: String,
    previewImageURL: String,
    category: String,
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 1
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Product', productSchema)
