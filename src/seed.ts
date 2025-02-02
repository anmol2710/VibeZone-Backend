import mongoose from "mongoose"
import Product from "./models/productSchema"

const products = [
    {
        name: "Headphone",
        description: "Experience crystal-clear sound with these noise-cancelling headphones. Enjoy deep bass, comfortable fit, and long battery life for uninterrupted listening.",
        price: 1000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            "https://m.media-amazon.com/images/I/5119MA1IHML._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61i8VtIAFTL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Mv39sbX+L._SL1500_.jpg"
        ]
    },
    {
        name: "Smartphone",
        description: "Stay connected with this latest smartphone. Featuring a high-resolution display, powerful processor, and an advanced camera system for stunning photos.",
        price: 15000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            "https://m.media-amazon.com/images/I/51Evhl1pUdL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/61kOf72-vaL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81V6-u0IAxL._SL1500_.jpg"
        ]
    },
    {
        name: "Laptop",
        description: "Boost your productivity with this high-performance laptop. Features include a sleek design, powerful graphics, and long-lasting battery life.",
        price: 45000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            'https://m.media-amazon.com/images/I/61H76AyN6pL._SL1500_.jpg',
            "https://m.media-amazon.com/images/I/71Ic+ESmziL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61aiORIJrlL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61aiORIJrlL._SL1500_.jpg"
        ]
    },
    {
        name: "Smartwatch",
        description: "Keep track of your fitness and notifications with this stylish smartwatch. Features include a heart rate monitor, GPS, and customizable watch faces.",
        price: 5000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            'https://m.media-amazon.com/images/I/819DWQLgjKL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/814ZRcbQaZL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61ITXJ1F0ZL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71FaPQsQ9EL._SL1500_.jpg'
        ]
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with excellent sound quality. Features include a long-lasting battery, water resistance, and easy connectivity.",
        price: 3000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            "https://m.media-amazon.com/images/I/51waOv47fqL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61WznBHVXlL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51KSeDBCYpL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41LT0mmIJoL._SL1000_.jpg"
        ]
    },
    {
        name: "Tablet",
        description: "A lightweight and powerful tablet perfect for work and play. Features a vibrant display, fast performance, and plenty of storage.",
        price: 20000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            "https://m.media-amazon.com/images/I/710WMfH99HL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71jdi4L8FSL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S4W9C-CIL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71roN8cA9dL._SL1500_.jpg"
        ]
    },
    {
        name: "Camera",
        description: "Capture stunning photos and videos with this high-resolution camera. Features include multiple shooting modes, fast autofocus, and high-quality lens.",
        price: 30000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            "https://m.media-amazon.com/images/I/916GGqnsG+L._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/91kAmoD9Q3L._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81tEJ0HH+xL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/91mLupiNgFL._SL1500_.jpg",
        ]
    },
    {
        name: "E-Reader",
        description: "Read your favorite books anywhere with this portable e-reader. Features a glare-free screen, long battery life, and adjustable backlight.",
        price: 8000,
        category: "679fa6926369f8b4e85f333d",
        images: [
            "https://m.media-amazon.com/images/I/71aF4QPCdvL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71DHvACwA3L._SL1001_.jpg",
            "https://m.media-amazon.com/images/I/61xzd6RDMxL._SL1001_.jpg",
        ]
    },
    {
        name: "Summer Dress",
        description: "Stay cool and stylish with this light and airy dress. Perfect for beach days and casual outings.",
        price: 2000,
        category: "679fa6926369f8b4e85f333e",
        images: [
            'https://m.media-amazon.com/images/I/61Ihgz8JotL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/81A35fOhRnL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/71YxuU+NoTL._SY741_.jpg',
            "https://m.media-amazon.com/images/I/71Vjy8YHWJL._SY741_.jpg"
        ]
    },
    {
        name: "Sunglasses",
        description: "Protect your eyes from the sun with these stylish sunglasses. Features UV protection and a comfortable fit.",
        price: 1500,
        category: "679fa6926369f8b4e85f333e",
        images: [
            "https://m.media-amazon.com/images/I/41x4IwDOH9S._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51LfKIralYS._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71KlPPvFurL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71IuTAXucRL._SX679_.jpg",
        ]
    },
    {
        name: "Flip Flops",
        description: "Comfortable and durable flip flops, perfect for the beach or poolside. Easy to slip on and off.",
        price: 500,
        category: "679fa6926369f8b4e85f333e",
        images: [
            "https://m.media-amazon.com/images/I/71a-UnYJgvL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/71J7lvTlTNL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/51y+qnaH0nL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/61N8RLTdXBL._SY695_.jpg"
        ]
    },
    {
        name: "Beach Hat",
        description: "Stay shaded and stylish with this wide-brimmed beach hat. Perfect for sunny days and outdoor activities.",
        price: 800,
        category: "679fa6926369f8b4e85f333e",
        images: [
            "https://m.media-amazon.com/images/I/81Cf+LGx6oL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/715M4Sq3wuL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71Nt0u2PZ0L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71q+mAvOh8L._SX679_.jpg",
        ]
    },
    {
        name: "Tank Top",
        description: "Lightweight and breathable tank top, ideal for hot days. Features a relaxed fit and soft fabric.",
        price: 600,
        category: "679fa6926369f8b4e85f333e",
        images: [
            'https://m.media-amazon.com/images/I/61ec378mUFS._SY741_.jpg',
            "https://m.media-amazon.com/images/I/51CFmT4bHwS._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51iYV7Iq72S._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51xYMIC5KOS._SY741_.jpg"
        ]
    },
    {
        name: "Shorts",
        description: "Comfortable and versatile shorts, perfect for casual wear and outdoor activities. Features pockets and a relaxed fit.",
        price: 1000,
        category: "679fa6926369f8b4e85f333e",
        images: [
            "https://m.media-amazon.com/images/I/41rcf5Ev+iL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61REUVnwakL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51aL8nTD37L._SX679_.jpg",
        ]
    },
    {
        name: "Sandals",
        description: "Stay comfortable and stylish with these sandals. Features a cushioned sole and adjustable straps.",
        price: 1800,
        category: "679fa6926369f8b4e85f333e",
        images: [
            'https://m.media-amazon.com/images/I/71I4r-JlJIL._SX695_.jpg',
            'https://m.media-amazon.com/images/I/81qYU021XNL._SX695_.jpg',
            'https://m.media-amazon.com/images/I/81DRv+qvG8L._SX695_.jpg',
            '',
        ]
    },
    {
        name: "Light Jacket",
        description: "A versatile light jacket perfect for weather. Features a comfortable fit and stylish design.",
        price: 2500,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/61ai5LJMmjL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61OkR65wXvL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61mNoD5CGML._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61HRZIpsWRL._SY741_.jpg',
        ]
    },
    {
        name: "Floral Dress",
        description: "Embrace with this beautiful floral dress. Features a flattering fit and lightweight fabric.",
        price: 3000,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/71tF9O0WgwL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg',
            'https://m.media-amazon.com/images/I/41vKpmWcdfL.jpg',
            'https://m.media-amazon.com/images/I/81tUFVkkj-L._SY741_.jpg',
        ]
    },
    {
        name: "Scarf",
        description: "Add a touch of elegance to your outfit with this scarf. Features a lightweight and breathable fabric.",
        price: 800,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/71IIdjt50KL._SX679_.jpg',
            'https://m.media-amazon.com/images/I/8153a8aoEeL._SX679_.jpg',
            'https://m.media-amazon.com/images/I/71D-Q3w1ZDL._SX679_.jpg',
            'https://m.media-amazon.com/images/I/71nSvegravL._SX679_.jpg',
        ]
    },
    {
        name: "Rain Boots",
        description: "Keep your feet dry with these stylish rain boots. Perfect for those unpredictable showers.",
        price: 1500,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/817fDP9O2OL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71Wnh+8WElL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81mDMFFaNAL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81keNvjgOUL._SL1500_.jpg',
        ]
    },
    {
        name: "Cardigan",
        description: "Stay warm and cozy with this soft cardigan. Features a relaxed fit and stylish design.",
        price: 2200,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/61EkJLD3O-L._SX679_.jpg',
            'https://m.media-amazon.com/images/I/61+XzSRJCqL._SX679_.jpg'
        ]
    },
    {
        name: "Sneakers",
        description: "Comfortable and stylish sneakers, perfect for casual wear and outdoor activities.",
        price: 1800,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/61VzAAvV6RL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/61cHczckDwL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/61FznPO5IcL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/617VAxDx6VL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/616oWgyrDcL._SY695_.jpg',
        ]
    },
    {
        name: "Denim Jacket",
        description: "Classic and timeless denim jacket, a must-have for any wardrobe. Features a comfortable fit and durable fabric.",
        price: 3500,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/61dbNrgOENL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61qBF4UqK3L._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61ZxCladg6L._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61rMzIImW8L._SY741_.jpg',
        ]
    },
    {
        name: "Chinos",
        description: "Stylish and comfortable chinos, perfect for both casual and formal wear. Features a relaxed fit and soft fabric.",
        price: 2000,
        category: "679fa6926369f8b4e85f3340",
        images: [
            'https://m.media-amazon.com/images/I/7142oodkIvL._SX569_.jpg',
            'https://m.media-amazon.com/images/I/710QdTmnwvL._SX569_.jpg',
            'https://m.media-amazon.com/images/I/91maTWxZKcL._SX569_.jpg',
            'https://m.media-amazon.com/images/I/91btnrKAuBL._SX569_.jpg'
        ]
    },
    {
        name: "Winter Coat",
        description: "Stay warm and stylish with this cozy coat. Features a faux fur-lined hood and insulated fabric.",
        price: 4500,
        category: "679fa6926369f8b4e85f333f",
        images: [
            "https://m.media-amazon.com/images/I/41YMvi2psXL.jpg",
            "https://m.media-amazon.com/images/I/51Vd3K5+6XL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51d6QcQprPL._SX569_.jpg",
            "https://m.media-amazon.com/images/I/516VSmGnvuL._SX679_.jpg",
        ]
    },
    {
        name: "Knit Sweater",
        description: "Keep cozy in this soft knit sweater, perfect for chilly days. Features a classic cable-knit design.",
        price: 2800,
        category: "679fa6926369f8b4e85f333f",
        images: [
            'https://m.media-amazon.com/images/I/71zlr1mWghL._SX679_.jpg',
            'https://m.media-amazon.com/images/I/71y02evfubL._SX679_.jpg',
            "https://m.media-amazon.com/images/I/71I6uuXfr-L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71Mps-x7XCL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/91F9-HdxQJL._SX679_.jpg",
        ]
    },
    {
        name: "Winter Boots",
        description: "Stay warm and dry with these durable winter boots. Features waterproof materials and insulated lining.",
        price: 3200,
        category: "679fa6926369f8b4e85f333f",
        images: [
            'https://m.media-amazon.com/images/I/71-9sljZ5UL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/813pd4mJ9fL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/81LtoMB5UgL._SY695_.jpg',
            'https://m.media-amazon.com/images/I/813pd4mJ9fL._SY695_.jpg',
        ]
    },
    {
        name: "Beanie Cap",
        description: "Add a stylish touch to your winter outfit with this cozy beanie Cap. Features a soft knit and warm lining.",
        price: 1200,
        category: "679fa6926369f8b4e85f333f",
        images: [
            'https://m.media-amazon.com/images/I/51p3el5Dq7L.jpg',
            'https://m.media-amazon.com/images/I/51lcDITvkzL.jpg',
            'https://m.media-amazon.com/images/I/51TJ6POembL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/515P-+BAVdL._SX679_.jpg',
        ]
    },
    {
        name: "Fleece Gloves",
        description: "Keep your hands warm with these soft fleece gloves. Features touchscreen compatibility and elastic cuffs.",
        price: 800,
        category: "679fa6926369f8b4e85f333f",
        images: [
            'https://m.media-amazon.com/images/I/51l5HvYTHfL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61H6ds6NZcL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61cHWd8GVJL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61fInzhXJML._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61vogOgqDbL._SL1500_.jpg',
        ]
    },
    {
        name: "Snow Pants",
        description: "Stay dry and comfortable in these waterproof snow pants. Perfect for winter sports and outdoor activities.",
        price: 3800,
        category: "679fa6926369f8b4e85f333f",
        images: [
            'https://m.media-amazon.com/images/I/61GJe6mKR3L._SX569_.jpg',
            'https://m.media-amazon.com/images/I/51lMcjjznnL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/31C0Ccm1qvL.jpg',
            'https://m.media-amazon.com/images/I/61y+NVo9-EL._SY741_.jpg',
            "https://m.media-amazon.com/images/I/41EhbMX0aQL.jpg"
        ]
    },
    {
        name: "Winter Scarf",
        description: "Bundle up with this stylish winter scarf. Features a soft knit and extra length for versatile styling.",
        price: 1000,
        category: "679fa6926369f8b4e85f333f",
        images: [
            'https://m.media-amazon.com/images/I/71j+EHzTDhL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/81CW0HrZwsL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/714oNug9iZL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/81ig9cKIGOL._SY741_.jpg',
        ]
    }
]

async function seedDB() {

    await mongoose.connect("")


    const res = await Product.insertMany(products)
    console.log(res)
}

seedDB();