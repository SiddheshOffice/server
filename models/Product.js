import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        name:String,
        price: Number,
        description: String,
        rating: Number,
        category: String,
        supply: Number
    },
{timestamps: true});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
