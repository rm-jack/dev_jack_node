// const { Constants } = require("../../Constants");
const { pool } = require("../../schemas/index");
class NoticeDAO {
  constructor() {
    this.mapper = require("mybatis-mapper");
    this.mapper.createMapper(["./notice/dao/xml/NoticeMapper.xml"]);
  }
  getNoticeList = async () => {
    try {
      const query = this.mapper.getStatement("NoticeMapper", "getNoticeList", {
        language: "sql",
        indent: "   ",
      });
      console.log("[class NoticeDAO-getNoticeList]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release(); 
      return rows;
    } catch (e) {
      console.log("[class NoticeDAO-getNoticeList]" + e);
      return [];
    }
  };
}
module.exports = NoticeDAO;
