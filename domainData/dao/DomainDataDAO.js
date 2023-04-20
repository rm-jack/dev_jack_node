const { pool } = require("../../schemas/index");
class DomainDataDAO {
  constructor() {
    this.mapper = require("mybatis-mapper");
    this.mapper.createMapper(["./domainData/dao/xml/DomainDataMapper.xml"]);
  }
  getIntroductionData = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getIntroductionData",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getIntroductionData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getIntroductionData]" + e);
      return [];
    }
  };
  getIntroductionText = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getIntroductionText",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getIntroductionData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getIntroductionData]" + e);
      return [];
    }
  };

  getFlingSpaceData = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getFlingSpaceData",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getFlingSpaceData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getFlingSpaceData]" + e);
      return [];
    }
  };
  getClientAndPartnersData = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getClientAndPartnersData",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getClientAndPartnersData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getClientAndPartnersData]" + e);
      return [];
    }
  };
  getTeamData = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getTeamData",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getTeamData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getTeamData]" + e);
      return [];
    }
  };
  getMainBannerImage = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getMainBannerData",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getMainBannerData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getMainBannerData]" + e);
      return [];
    }
  };
  getMainBannerText = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getMainBannerText",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getMainBannerData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getMainBannerData]" + e);
      return [];
    }
  };
  getMainPageText = async () => {
    try {
      const query = this.mapper.getStatement(
        "DomainDataMapper",
        "getMainPageText",
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class DomainData-getMainPageText]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class DomainData-getMainPageText]" + e);
      return [];
    }
  };
}
module.exports = DomainDataDAO;
