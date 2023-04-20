const NoticeDAO = require("../dao/NoticeDAO");

class NoticeService {
  constructor() {
    this.NoticeDAO = new NoticeDAO();
  }

  getNoticeList = async () => {
    const data = await this.NoticeDAO.getNoticeList();
    return data;
  };
}

module.exports = NoticeService;
