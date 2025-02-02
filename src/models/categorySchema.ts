import mongoose, { Schema } from "mongoose"

export interface ICategory extends Document{
    name: string;
    displayName: string;
    description?: string;
    image: string;
    createdAt: Date;
    
}

const categorySchema:Schema<ICategory> = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    displayName: {
        type: String,
        required:true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }

})

const Category = mongoose.models.Category || mongoose.model("Category" , categorySchema)

export default Category;