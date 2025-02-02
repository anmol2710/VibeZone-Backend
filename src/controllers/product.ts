import { Request, Response } from "express"
import Product from "../models/productSchema";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {

    const { categoryId } = req.params;

    try {
        const products = await Product.find({ category: categoryId })
        if (!products || products.length === 0) {
            res.status(500).json({ error: "No product found for this category", success: false })
        }
        else if (products) {
            res.status(200).json({ products, success: true })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to load Products", success: false })
    }
}

export const getProductById = async (req: Request, res: Response): Promise<void> => {

    const { productId } = req.params;
    console.log(productId)

    try {

        const product = await Product.findById(productId);

        if (product) {
            res.status(200).json({ product, status: true })
        }
        else {
            res.status(400).json({ error: "No product found", status: false })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to get Product", success: false })
    }

}

export const getFeaturedProducts = async (req: Request, res: Response): Promise<void> => {

    try {

        let products = await Product.find();

        const shuffled = products.sort(() => 0.5 - Math.random());
        products = shuffled.slice(0, 9);
        console.log("Product ")
        console.log(products)
        res.status(200).json({ products, status: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Intrenal server error", status: false });
    }

}