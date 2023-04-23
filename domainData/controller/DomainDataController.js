const express = require("express");
const router = express.Router();
const DomainDataService = require("../service/DomainDataService");
const validate = require("../../middleware/validate");
const { param, matchedData } = require("express-validator");
// const jwt = require("../../utils/jwt");


require("dotenv").config();

class DomainDataController {
  constructor() {
    this.service = new DomainDataService();
  }

  /**
   * Get domain specific data by domainType
   */
  getDomainTypeImage = async (req, res, next) => {
    const { domainType } = matchedData(req);
    // console.log(domainType);
    const data = await this.service.getDomainTypeImage(domainType);
    res.json(data);
    next();
  };
  getDomainTypeText = async (req, res, next) => {
    const { domainType } = matchedData(req);
    console.log(domainType);
    const data = await this.service.getDomainTypeText(domainType);
    res.json(data);
    next();
  };

  /**
   * Main Page Controller
   */
  getMainBannerImage = async (req, res, next) => {
    const response = {};
    const data = await this.service.getMainBannerImage();
    response.image = data;
    res.json(response);
    next();
  };

  getFlingIntroductionData = async (req, res, next) => {
    const response = {};
    const data = await this.service.getFlingIntroductionData();
    const text = await this.service.getFlingIntroductionText();
    response.image = data;
    response.text = text;
    res.json(response);
    next();
  };
  getFlingSpaceData = async (req, res, next) => {
    const data = await this.service.getFlingSpaceData();
    res.json(data);
    next();
  };
  getClientAndPartnersData = async (req, res, next) => {
    const data = await this.service.getClientAndPartnersData();
    res.json(data);
    next();
  };
  /**
   * Brand Page Controller
   * GET
   * POST
   * UPDATE
   */
  getTeamData = async (req, res, next) => {
    const data = await this.service.getTeamData();
    res.json(data);
    next();
  };
  /**
   * Portfolio Page Controller
   * GET
   * POST
   * UPDATE
   */

  /**
   * Product Page Controller
   */

  /**
   * Use Case Page Controller
   * GET
   * POST
   * UPDATE
   */

  /**
   * Event Page Controller
   * GET
   * POST
   * UPDATE
   */

  /**
   * Notice Page Controller
   * GET
   * POST
   * UPDATE
   */

  /**
   * Contact Page Controller
   * GET
   * POST
   * UPDATE
   */
}

const controller = new DomainDataController();

//Validator.
const validateDomainType = [param("domainType").notEmpty().trim().escape(), validate];

//Router.
router.get(
  "/domainTypeText/:domainType",
  validateDomainType,
  controller.getDomainTypeText
);
router.get(
  "/domainTypeImage/:domainType",
  validateDomainType,
  controller.getDomainTypeImage
);

router.get("/mainBannerImage", controller.getMainBannerImage);
router.get("/introductionData", controller.getFlingIntroductionData);
router.get("/flingSpaceData", controller.getFlingSpaceData);
router.get("/teamData", controller.getTeamData);
router.get("/clientAndPartnersData", controller.getClientAndPartnersData);

module.exports = router;
