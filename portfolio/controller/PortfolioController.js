const express = require("express");
const router = express.Router();
const PortfolioService = require("../service/PortfolioService");
const validate = require("../../middleware/validate");
const { param, matchedData } = require("express-validator");
// const jwt = require("../../utils/jwt");

require("dotenv").config();

class PortfolioController {
  constructor() {
    this.service = new PortfolioService();
  }
  getPortfolioList = async (req, res, next) => {
    const portfoliList = await this.service.getPortfolioList();
    if (portfoliList) {
      res.json(portfoliList);
      return next();
    }
    res.json({ msg: "Error Occured" });
  };

  getPortfolioBanner = async (req, res, next) => {
    const { id } = matchedData(req);
    const bannerImages = await this.service.getPortfolioBanner(Number(id));
    if (bannerImages) {
      res.json(bannerImages);
      return next();
    }
    res.json({ msg: "Error Occured" });
  };
}

const controller = new PortfolioController();

//Validators.
const validateIdx = [
  param("id").notEmpty().isInt().withMessage("id should be integer"),
  validate,
];

//Routers.
router.get("/", controller.getPortfolioList);
router.get("/portfolioBanner/:id", validateIdx, controller.getPortfolioBanner);
module.exports = router;
