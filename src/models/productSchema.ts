import mongoose, { Schema , Document } from "mongoose"

export interface IProduct extends Document{
    name: string;
    description?: string;
    images: string[];
    price: number;
    category: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    
}

const productSchema:Schema<IProduct> = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
    },
    images: {
        type: [String],
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }

})

const Product = mongoose.models.Product || mongoose.model("Product" , productSchema)

export default Product;