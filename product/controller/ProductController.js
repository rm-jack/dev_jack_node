const express = require("express");
const router = express.Router();
const ProductService = require("../service/ProductService");
const validate = require("../../middleware/validator");
const { body, matchedData } = require("express-validator");
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
    const { products } = matchedData(req);
    const data = await this.service.getProductListByIdx(products);
    // console.log(data);
    res.json(data);
    next();
  };
}

const controller = new ProductController();

//Validators.
const isEmptyArray = (products) => {
  if (products.length === 0) {
    throw new Error("products should not be a empty string");
  }
  products.forEach((element) => {
    if (!Number.isInteger(element)) {
      throw new Error("element of array should be integer");
    }
  });
  return products;
};
const validateIdx = [
  body("products")
    .notEmpty()
    .isArray()
    .withMessage("products should be array with valid productIdx.")
    .custom(isEmptyArray),
  validate,
];

//Routers.
router.post("/productList", controller.getProductList);
router.get("/productData/:id", controller.getProduct);
router.get("/productBanner/:id", controller.getProductBanner);
router.get("/productComponent/:id", controller.getProductComponent);
router.post("/productListByIdx", validateIdx, controller.getProductListByIdx);
module.exports = router;
