const { pool } = require("../../schemas/index");
class PortfolioDAO {
  constructor() {
    this.mapper = require("mybatis-mapper");
    this.mapper.createMapper(["./Portfolio/dao/xml/PortfolioMapper.xml"]);
  }

  getPortfolioList = async () => {
    try {
      const query = this.mapper.getStatement(
        "PortfolioMapper",
        "getPortfolioList",
        
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Portfolio-getPortfolioList]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Portfolio-getPortfolioList]" + e);
      return false;
    }
  };
  getPortfolioBanner = async (spaceIdx) => {
    try {
      const query = this.mapper.getStatement(
        "PortfolioMapper",
        "getPortfolioBanner",
        { spaceIdx },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Portfolio-getPortfolioList]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Portfolio-getPortfolioList]" + e);
      return [];
    }
  };
}

module.exports = PortfolioDAO;
