import { Router } from 'express';
const router = Router();

import * as productCtrl from "../controllers/product.controller";

router.get('/products', productCtrl.getProducts);

router.get('/products/:productId', productCtrl.getProduct);

router.post('/products', productCtrl.createProduct);

router.put('/products/:productId', productCtrl.updateProduct);

router.delete('/products/:productId', productCtrl.deleteProduct);


export default router;