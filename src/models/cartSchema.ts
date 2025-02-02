import mongoose, { Schema } from "mongoose";
import { IItemSchema, itemSchema } from "./orderSchema";

export interface CartSchema{
    user: mongoose.Schema.Types.ObjectId;
    items: [IItemSchema];
    createdAt: Date;
}

const cartSchema:Schema<CartSchema> = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    items: {
        type: [itemSchema],
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const Cart = mongoose.models.carts || mongoose.model("carts" , cartSchema)

export default Cart