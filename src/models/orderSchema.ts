import mongoose, { Schema, Document } from "mongoose"

enum OrderStatus {
    ORDER_PLACED = "Order Placed",
    SHIPPING = "Shipping",
    OUT_OF_DELIVERY = "Out of Delivery",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled"
}

export interface IItemSchema extends Document {
    product: mongoose.Schema.Types.ObjectId;
    qty: number
}

export const itemSchema: Schema<IItemSchema> = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    qty: {
        type: Number,
        required: true,
        default: 1
    }
})

export interface IOrder extends Document {
    user: mongoose.Schema.Types.ObjectId;
    items: [IItemSchema]
    amount: number;
    delieveryDate: Date;
    address: string;
    status: OrderStatus
    createdAt: Date;
}

const orderSchema: Schema<IOrder> = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [itemSchema],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    delieveryDate: {
        type: Date,
    },
    address: {
        type: String
    },
    status: {
        type: String,
        enum: OrderStatus,
        default: OrderStatus.ORDER_PLACED,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order;