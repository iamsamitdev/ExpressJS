// Import express
const express = require("express")

// Import Cors
const cors = require("cors")

// Import Router
const prouductRouter = require("./routes/productRoutes")
const userRouter = require("./routes/userRoute")
const productRouter = require("./routes/productRoutes")

// Create an instance of express
const app = express()
app.use(express.json())

// Use Cors
app.use(cors({
    // origin: ["http://itgenius.co.th", "http://google.com"],
    origin: "*", // อนุญาตให้เข้าถึงจากทุกโดเมน
    methods: ["GET", "POST", "PUT", "DELETE"], // กําหนด method ที่อนุญาต
}))

// Use Router
app.use("/api/products", prouductRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

// Create a port
const port = 3000

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})