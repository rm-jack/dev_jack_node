const express = require("express");
const router = express.Router();
const ProductService = require("../service/ProductService");

// const jwt = require("../../utils/jwt");

require("dotenv").config();

class ProductController {
  constructor() {
    this.service = new ProductService();
  }
  getProductList = async (req, res, next) => {
    const param = req.body;
    console.log(param);
    const data = await this.service.getProductList(param);
    // console.log(data);
    res.json(data);
    next();
  };

  getProduct = async (req, res, next) => {
    const { id } = req.params;
    const data = await this.service.getProduct(id);
    // console.log(data);
    res.json(data);
    next();
  };

  getProductBanner = async (req, res, next) => {
    const { id } = req.params;
    const data = await this.service.getProductBanner(Number(id));
    res.json(data);
    next();
  };
  getProductComponent = async (req, res, next) => {
    const { id } = req.params;
    const data = await this.service.getProductComponent(Number(id));
    res.json(data);
    next();
  };
  getProductListByIdx = async (req, res, next) => {
    const {products} = req.body; 
    const data = await this.service.getProductListByIdx(products); 
    console.log(data);
    res.json(data); 
    next(); 
  }
}

const controller = new ProductController();

router.post("/productList", controller.getProductList);
router.get("/productData/:id", controller.getProduct);
router.get("/productBanner/:id", controller.getProductBanner);
router.get("/productComponent/:id", controller.getProductComponent);
router.post("/productListByIdx", controller.getProductListByIdx); 
module.exports = router;
