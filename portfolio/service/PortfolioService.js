const { CommonUtil } = require("../../utils/CommonUtil");
const PortfolioDAO = require("../dao/PortfolioDAO");
const qr = require("qrcode");

class PortfolioService {
  constructor() {
    this.PortfolioDAO = new PortfolioDAO();
  }
  getPortfolioList = async () => {
    const data = await this.PortfolioDAO.getPortfolioList();
    return data;
  };

  getPortfolioBanner = async (idx) => {
    const data = await this.PortfolioDAO.getPortfolioBanner(Number(idx));
    try {
      const res = CommonUtil.convertPathToBuffer(data);
      return res;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
}

module.exports = PortfolioService;
