const DomainDataDAO = require("../dao/DomainDataDAO");
// const fs = require("fs");
// const path = require("path");

const { CommonUtil } = require("../../utils/CommonUtil");

class DomainDataService {
  constructor() {
    this.DomainDataDAO = new DomainDataDAO();
  }
  /**
   * Main Page Assets . Images and Text 
   */
  getMainBannerImage = async () => {
    const mainBannerImage = await this.DomainDataDAO.getMainBannerImage();
    try {
      const res = CommonUtil.convertPathToBuffer(mainBannerImage);

      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  getMainBannerText = async () => {
    const mainBannerText = await this.DomainDataDAO.getMainBannerText();
    return mainBannerText;
  };
  getFlingIntroductionData = async () => {
    const flingIntroductionData =
      await this.DomainDataDAO.getIntroductionData();
    try {
      const res = CommonUtil.convertPathToBuffer(flingIntroductionData);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  getFlingIntroductionText = async () => {
    const flingIntroductionData =
      await this.DomainDataDAO.getIntroductionText();
    return flingIntroductionData;
  };
  getFlingSpaceData = async () => {
    const flingSpaceData = await this.DomainDataDAO.getFlingSpaceData();
    try {
      const res = CommonUtil.convertPathToBuffer(flingSpaceData);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  getClientAndPartnersData = async () => {
    const clientAndPartnersData =
      await this.DomainDataDAO.getClientAndPartnersData();
    try {
      const res = CommonUtil.convertPathToBuffer(clientAndPartnersData);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  /**
   * About Page Assets. Image and Text
   */
  getTeamData = async () => {
    const teamData = await this.DomainDataDAO.getTeamData();
    try {
      const res = CommonUtil.convertPathToBuffer(teamData);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  
}

module.exports = DomainDataService;
