import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js"

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productStats = await ProductStat.find();

    const productsWithStats = products.map((product) => {
      const stat = productStats.find((stats) => {
        return product._id.toString() === stats.productId.toString();
      });
      return {
        ...product._doc,
        stat,
      };
    });
    res.json(productsWithStats);
  } catch (error) {
    res.json(error);
  }
};

export const getCustomers = async (req, res) =>{
  try {
    const customers = await User.find({role: "user"}).select("-password");
    res.json(customers);
  } catch (error) {
    res.json(error);
  }
}