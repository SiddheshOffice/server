import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = products.map(async (product) => {
      const stat = await ProductStat.find(
        (stats) => stats.productId === product._id,
      );
      return {
        product,
        stat,
      };
    });
    res.json(productsWithStats);
  } catch (error) {
    res.json(error);
  }
};
