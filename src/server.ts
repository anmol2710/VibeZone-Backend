import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute"
import categoryRoute from "./routes/categoryRoute"
import productRoute from "./routes/productRoutes"
import orderRoute from "./routes/orderRoute"
import cartRoute from "./routes/cartRoute"
import { dbConnect } from "./utils/dbConnect"
import cors from "cors"

const app = express();
dotenv.config();
dbConnect();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use("/user", userRoute)
app.use("/categories", categoryRoute)
app.use("/products", productRoute)
app.use("/cart", cartRoute)
app.use("/order", orderRoute)

app.get("/", (req: Request, res: any) => {
    return res.json({ msg: "Hello World" })
})

app.listen(process.env.PORT, () => {
    console.log("Server Started")
})