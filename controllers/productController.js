// controllers/productService.js

const productService = require("../services/productService")

// สร้างฟังก์ชันสำหรับอ่านข้อมูลผู้ใช้ทั้งหมด
const getAllProducts = async (req, res, next) => {
   try {
       const products = await productService.getAllProducts()
       res.status(200).json(products)
   } catch (error) {
       next(error)
   }
}

// ฟังก์ชันสําหรับอ่านข้อมูลสินค้าตาม ID
const getProductById = async (req, res, next) => {
   try {
       const product = await productService.getProductById(req.params.id)
       res.status(200).json(product)
   } catch (error) {
       next(error)
   }
}

// สร้างฟังก์ชันสำหรับการเพิ่มข้อมูลสินค้า
const addProduct = async (req, res, next) => {
   // รับค่าจากผู้ใช้
   const { name, price, qty } = req.body

   try {
       const product = await productService.addProduct(name,price,qty)
       res.status(200).json(product)
   } catch (error) {
       next(error)
   }
}

// สร้างฟังก์ชันสำหรับการอัพเดทข้อมูลสินค้า
const updateProduct = async (req, res, next) => {
   // รับค่าจากผู้ใช้
   const { id, name, price, qty } = req.body

   try {
       const product = await productService.updateProduct(id, name, price, qty)
       res.status(200).json(product)
   } catch (error) {
       next(error)
   }
}

// สร้างฟังก์ชันสำหรับการลบข้อมูลสินค้า
const deleteProduct = async (req, res, next) => {
   try {
       const product = await productService.deleteProduct(req.params.id)
       res.status(200).json(product)
   } catch (error) {
       next(error)
   }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}