const { pool } = require("../../schemas/index");
class ProductDAO {
  constructor() {
    this.mapper = require("mybatis-mapper");
    this.mapper.createMapper(["./Product/dao/xml/ProductMapper.xml"]);
  }
  getProductList = async (limit, offset) => {
    try {
      const query = this.mapper.getStatement(
        "ProductMapper",
        "getProductList",
        { limit, offset },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Product-getProductList]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getProductList]" + e);
      return [];
    }
  };
  getProductData = async (productIdx) => {
    try {
      const query = this.mapper.getStatement(
        "ProductMapper",
        "getProductData",
        { productIdx },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Product-getProductData]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getProductData]" + e);
      return [];
    }
  };
  getProductBanner = async (productIdx) => {
    try {
      const query = this.mapper.getStatement(
        "ProductMapper",
        "getProductBanner",
        { productIdx },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Product-getProductBanner]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getProductBanner]" + e);
      return [];
    }
  };
  getProductComponent = async (productIdx) => {
    try {
      const query = this.mapper.getStatement(
        "ProductMapper",
        "getProductComponent",
        { productIdx },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Product-getProductComponent]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getProductComponent]" + e);
      return [];
    }
  };

  getOtherProduct = async (productIdx, clickCount, offSet) => {
    try {
      const query = this.mapper.getStatement(
        "ProductMapper",
        "getOtherProduct",
        { productIdx, clickCount, offSet },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Product-getOtherProduct]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getOtherProduct]" + e);
      return [];
    }
  };
}

module.exports = ProductDAO;
