const express = require("express");
const router = express.Router();
const NoticeService = require("../service/NoticeService");
// const jwt = require("../../utils/jwt");

require("dotenv").config();

class NoticeController {
  constructor() {
    this.service = new NoticeService();
  }

  getNoticeList = async (req, res, next) => {
    const data = await this.service.getNoticeList();
    res.json(data);
    next();
  };
}

const controller = new NoticeController();

router.get("/getNoticeList", controller.getNoticeList);

module.exports = router;
