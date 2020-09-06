import Product from '../models/product.model';
import { isValidObjectId } from "mongoose";


export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        products,
    });
};

export const getProduct = async (req, res) => {
    const validObject = isValidObjectId(req.params.productId);
    if(!validObject) return res.status(422).json({massage: 'El ID no es valido'})

    const product = await Product.findById(req.params.productId)
    res.status(200).json({
        product,
    });
};

export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    const product = await newProduct.save()
    res.status(200).json({
        product,
    });
};

export const updateProduct = async (req, res) => {
    const productUpdated = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        { new: true }
    );
    res.status(200).json({
        productUpdated,
    });
};

export const deleteProduct = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(200).json({
        deletedProduct,
    });
};
