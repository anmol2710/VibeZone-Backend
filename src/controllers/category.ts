import { Request , Response } from "express"
import Category from "../models/categorySchema"

export const getAllCategory = async (req: Request, res: Response): Promise<void> => {


    console.log(req.cookies)

    try {
        
        const categories = await Category.find({});

        if (categories) {
            res.status(200).json({categories , success:true})
        }
        else {
            res.status(500).json({error:"Internal Server Error" , success:false})
        }
    } catch (error) {
        res.status(500).json({error:"Failed to load categories"  , success:true})
    }
}