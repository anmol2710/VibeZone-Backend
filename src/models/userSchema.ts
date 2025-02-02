import mongoose, { Schema } from "mongoose"

export interface IUser extends Document{
    name: string,
    email: string,
    imageUrl: string;
    address?: string,
    createdAt:Date
    
}

const userSchema:Schema<IUser> = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    imageUrl: {
        type: String,
        required: true,
        unique:true    
    },
    address: {
        type: String,
    },
    createdAt: {
        type: Date,
        default:Date.now
    }

})

const User = mongoose.models.User || mongoose.model("User" , userSchema)

export default User;