import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productStats = await ProductStat.find();

    const productsWithStats = products.map((product) => {
      const stat = productStats.map((stats) => {
        return {
          productId: product._id,
          statsId: stats.productId,
        };
      });
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
