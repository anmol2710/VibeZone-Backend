import mongoose, { Schema } from "mongoose"

enum TransactionStatus {
    SUCCESS = 'Success',
    FAILED = 'Failed',
    PENDING = 'Pending'
}

export interface ITransaction extends Document {
    user: mongoose.Schema.Types.ObjectId;
    order: mongoose.Schema.Types.ObjectId;
    orderId: string;
    paymentId: string;
    amount: number;
    status: TransactionStatus
    createdAt: Date
}

const transactionSchema: Schema<ITransaction> = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    paymentId: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: TransactionStatus,
        required: true,
        default: TransactionStatus.SUCCESS
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema)

export default Transaction;