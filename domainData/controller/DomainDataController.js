const express = require("express");
const router = express.Router();
const DomainDataService = require("../service/DomainDataService");

// const jwt = require("../../utils/jwt");

require("dotenv").config();

class DomainDataController {
  constructor() {
    this.service = new DomainDataService();
  }
  //** Main Page Controller** //

  getMainBannerImage = async (req, res, next) => {
    const response = {};
    const data = await this.service.getMainBannerImage();
    response.image = data;
    res.json(response);
    next();
  };
  getMainBannerText = async (req, res, next) => {
    const response = {};
    const data = await this.service.getMainBannerText();
    response.text = data;
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
  getPortfolioPageDescription = async (req, res, next)=>{
    const data = await this.service.getPortfolioPageDescription(); 
    res.json(data); 
    next(); 
  }
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

router.get("/mainBannerImage", controller.getMainBannerImage);
router.get("/mainBannerText", controller.getMainBannerText);
router.get("/introductionData", controller.getFlingIntroductionData);
router.get("/flingSpaceData", controller.getFlingSpaceData);
router.get("/teamData", controller.getTeamData);
router.get("/clientAndPartnersData", controller.getClientAndPartnersData);



router.get('/portfolioText')
module.exports = router;
