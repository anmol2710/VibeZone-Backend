import { Request, Response } from "express"
import { razorpayInstance } from "../utils/Razorpay";
import crypto from "crypto"
import Cart from "../models/cartSchema";
import Order from "../models/orderSchema";
import Transaction from "../models/transactionSchema";

export const createTransaction = async (req: Request, res: Response): Promise<void> => {

    const { userId, amount } = req.body;

    const options = {
        amount: amount * 100,
        currency: "INR",
    }

    console.log(options)

    try {

        // if (!userId || !amount) {
        //     res.status(400).json({ error: "Invalid request", status: false })
        // }

        const razorpayOrder = await razorpayInstance.orders.create(options);

        console.log(razorpayOrder)

        res.status(201).json({
            status: true,
            message: "Order created Successfully",
            key: process.env.RAZORPAY_KEY_ID,
            orderId: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency
        })


    } catch (error) {
        console.log(error)
        res.json(500).json({ error: "Internal Server Error", status: false })
    }
}

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    let {
        userId,
        razorpay_orderId,
        razorpay_paymentId,
        razorpay_signature,
        amount,
        delieveryDate,
        address
    } = req.body;

    console.log(req.body);
    amount = parseInt(amount);

    try {
        const key_secret = process.env.RAZORPAY_SECRET;
        if (key_secret) {
            const generatedSignature = crypto.createHmac("sha256", key_secret)
                .update(razorpay_orderId + "|" + razorpay_paymentId)
                .digest("hex")

            if (generatedSignature === razorpay_signature) {

                const cart = await Cart.findOne({ user: userId })
                if (cart && cart.items) {

                    const items = cart.items;
                    console.log(items)

                    const transaction = await Transaction.create({
                        user: userId,
                        orderId: razorpay_orderId,
                        paymentId: razorpay_paymentId,
                        amount
                    })

                    console.log(transaction)


                    const order = await Order.create({
                        user: userId,
                        items,
                        amount,
                        delieveryDate,
                        address
                    })
                    console.log(order)

                    transaction.order = order._id;
                    await transaction.save();
                    cart.items = [];
                    await cart.save();
                    res.status(200).json({
                        status: true,
                        order
                    })
                }

            }
            else {
                res.status(400).json({ error: "Failed to create Order", status: false })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server error", status: false })
    }

}

export async function getOrders(req: Request, res: Response): Promise<void> {
    const { userId } = req.body;

    try {
        const orders = await Order.find({ user: userId })
            .populate({
                path: "items.product"
            })

        console.log(orders)
        console.log(orders.length)

        res.status(200).json({
            orders,
            status: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error", status: false });
    }

}