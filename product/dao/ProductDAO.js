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

  getProductListByIdx = async (productList) => {
    try {
      console.log(productList);
      const query = this.mapper.getStatement(
        "ProductMapper",
        "getProductListByIdx",
        { productList: [...productList] },
        {
          language: "sql",
          indent: "   ",
        }
      );
      console.log("[class Product-getProductListByIdx]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getProductListByIdx]" + e);
      return [];
    }
  };

  getAllProduct = async () => {
    try {
      const query = this.mapper.getStatement("ProductMapper", "getAllProduct", {
        language: "sql",
        indent: "   ",
      });
      console.log("[class Product-getAllProduct]" + query);

      const connection = await pool.getConnection(async (conn) => {
        conn;
      });
      const [rows] = await connection.query(query);
      console.log(`response: ${rows}`);
      connection.release();
      return rows;
    } catch (e) {
      console.log("[class Product-getAllProduct]" + e);
      return [];
    }
  };
}

module.exports = ProductDAO;
