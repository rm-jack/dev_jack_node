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

  getOtherProduct = async (req, res, next) => {
    const { id, count, offset } = req.params;
    // console.log(
    //   `id: ${Number(id)}, count : ${Number(count)}, offset : ${Number(offset)}`
    // );
    const data = await this.service.getOtherProduct(id, count, offset);
    console.log(data); 
    res.json(true);
    next();
  };
}

const controller = new ProductController();

router.post("/productList", controller.getProductList);
router.get("/:id", controller.getProduct);
router.get("/:id/:count/:offset", controller.getOtherProduct);
module.exports = router;
