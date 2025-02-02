import { Request, Response } from "express";
import Cart from "../models/cartSchema";
import { IItemSchema } from "../models/orderSchema";

// Function to get cart items
export async function getCart(req: Request, res: Response): Promise<void> {
    const { userId } = req.body;

    try {
        const cart = await Cart.findOne({ user: userId })
            .populate({
                path: "items.product",
                model:"Product"
        })
        if (cart) {
            console.log(cart)
            res.status(200).json({ cart:cart.items, status: true });
        }
        else {
            res.status(200).json({ error: "No item found in cart", status: false });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", status: false });
    }
}

// Function to add items to cart
export async function addToCart(req: Request, res: Response): Promise<void> {
    const { userId, newItems } = req.body;
    try {
        let cart = await Cart.findOne({ user: userId });

        // If cart doesn't exist, create a new one
        if (!cart) {
            cart = new Cart({
                user: userId,
                items: [newItems]
            });
        } else {
            // Retrieve the items array from the cart
            const items: IItemSchema[] = cart.items;

            // Check if the item already exists in the cart
            const index = items.findIndex((item) => 
                item.product.toString() === newItems.product.toString()
            );

            if (index === -1) {
                // Item not found, add new item
                items.push(newItems);
            } else {
                // Item exists, update quantity
                items[index].qty += newItems.qty;
            }

            // Update the cart's items
            cart.items = items;
        }

        // Save the updated cart
        await cart.save();
        res.status(200).json({ cart, status: true });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export async function removeFromCart(req:Request,res:Response):Promise<void> {
    const { userId, itemId } = req.body;

    try {
        const cart = await Cart.findOne({ user: userId })
        
        let items: IItemSchema[] = cart.items;
        console.log(items)
        items = items.filter((cartItem) => cartItem.product.toString() !== itemId);
        console.log(items)
        
        cart.items = items;
        await cart.save();
        
        res.status(200).json({cart , status:true})
    } catch (error) {
        res.status(500).json({error:"Internal server error" , status:false})
    }
}