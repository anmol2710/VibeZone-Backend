import { Request, Response } from "express"
import User from "../models/userSchema";

export const loginorSignup = async (req: Request, res: Response): Promise<void> => {
    const { name, email, imageUrl } = req.body;
    console.log(req.body)

    try {
        const user = await User.findOne({ email });

        if (user) {
            res.json({ token: user._id, user, status: true });
        } else {

            const newUser = await User.create({ name, email, imageUrl });

            if (newUser) {
                console.log(newUser);
                res.json({ token: newUser._id, user: newUser, status: true });
            } else {
                res.json({ error: "Internal server error", status: false });
            }
        }
    } catch (error) {
        res.json({ message: "Internal server error", status: false });
    }
}

export const getUser = async (req: Request, res: Response): Promise<void> => {

    const { userId } = req.body;

    try {
        const user = await User.findById(userId);

        res.json({ user, status: true })
    } catch (error) {
        console.log(error);
        res.json({ errro: "Internal server error", status: false });
    }

}