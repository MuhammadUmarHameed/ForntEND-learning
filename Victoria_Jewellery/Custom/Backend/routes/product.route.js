import express from 'express';
import {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getBestSeller,
  getOnSale,
  toggleFeaturedProduct,
  createProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protectRoute, adminRoute, getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/bestSeller', getBestSeller);
router.get('/onSale', getOnSale);
router.patch('/:id', protectRoute, adminRoute, toggleFeaturedProduct);
router.post('/', protectRoute, adminRoute, createProduct);
router.delete('/:id', protectRoute, adminRoute, deleteProduct);

export default router;
