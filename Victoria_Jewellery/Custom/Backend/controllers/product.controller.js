import { redis } from '../lib/redis.js';
import cloudinary from '../lib/cloudinary.js';
import Product from '../models/product.model.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    console.log('Error while fetching products', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    let featuredProducts = await redis.get('featured_products');
    if (featuredProducts) {
      return res.json(JSON.parse(featuredProducts));
    }
    //if not in redis, return from mongodb
    //.lean() is gonna return a plain js object instead of mongodb document
    featuredProducts = await Product.find({ isFeatured: true }).lean();

    if (!featuredProducts) {
      return res.status(404).json({ message: 'No featured products found' });
    }

    //store the featured products in redis for quick access
    await redis.set('featured_products', JSON.stringify(featuredProducts));
    res.json(featuredProducts);
  } catch (error) {
    console.log('Error while fetching featured products', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.json({ products });
  } catch (error) {
    console.log('Error while fetching products by category', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
  res.json({ products });
};

export const getBestSeller = async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $match: { isBestSeller: true } },
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          price: 1,
          image: 1,
          category: 1,
        },
      },
    ]);
    res.json({ products });
  } catch (error) {
    console.log('Error while fetching best sellers', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const getOnSale = async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $match: { isOnSale: true } },
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          price: 1,
          image: 1,
          category: 1,
        },
      },
    ]);
    res.json({ products });
  } catch (error) {
    console.log('Error while fetching on sale', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const toggleFeaturedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.isFeatured = !product.isFeatured;
      const updatedProduct = await product.save();
      await updatedFeaturedProductCache();
      res.json(updatedProduct);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.log('Error while toggling featured product', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

async function updatedFeaturedProductCache() {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redis.set('featured_products', JSON.stringify(featuredProducts));
  } catch (error) {
    console.log('Error while updating featured product cache', error.message);
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: 'products',
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      image: cloudinaryResponse?.secure_url || '',
      category,
    });

    res.status(201).json({ product });
  } catch (error) {
    console.log('Error while creating product', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.image) {
      const publicId = product.image.split('/').pop().split('.')[0];
      try {
        await cloudinary.uploader.destroy(`products/${publicId}`);
        console.log('Image deleted successfully');
      } catch (error) {
        console.error('Error deleting image', error.message);
      }
    }
    await Product.findById(req.params.id);
  } catch (error) {
    console.log('Error while deleting product', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
