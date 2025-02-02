import mongoose from "mongoose";
import Category from "./models/categorySchema";

const categories = [
    {
        displayName: "Electronics",
        image: "https://m.media-amazon.com/images/I/61H76AyN6pL._SL1500_.jpg",
        name: "electronics"
    },
    {
        displayName: "Summer Collections",
        image: "https://m.media-amazon.com/images/I/61Ihgz8JotL._SY741_.jpg",
        name: "summer"
    },
    {
        displayName: "Winter Collections",
        image: "https://m.media-amazon.com/images/I/41YMvi2psXL.jpg",
        name: "winter"
    },
    {
        displayName: "Spring Collections",
        image: "https://m.media-amazon.com/images/I/61ai5LJMmjL._SY741_.jpg",
        name: "spring"
    },
]

async function seedDB() {

    await mongoose.connect("")


    const res = await Category.insertMany(categories)
    console.log(res)
}

seedDB();