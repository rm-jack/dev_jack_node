const { CommonUtil } = require("../../utils/CommonUtil");
const ProductDAO = require("../dao/ProductDAO");
const qr = require("qrcode");

class ProductService {
  constructor() {
    this.ProductDAO = new ProductDAO();
  }

  _generateQR = async (text) => {
    try {
      const code = await qr.toDataURL(text);
      return code;
    } catch (e) {
      console.log(e);
      return "";
    }
  };
  getProductList = async (param) => {
    const { limit, offset } = param;

    const productList = await this.ProductDAO.getProductList(
      Number(limit),
      Number(offset)
    );
    // console.log(productList);
    try {
      const res = CommonUtil.convertPathToBuffer(productList);
      //   console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  getProduct = async (id) => {
    const productData = await this.ProductDAO.getProductData(Number(id));
    const productList = await this.ProductDAO.getAllProduct();
    try {
      const res = {};
      const qr = await this._generateQR(productData[0].spatialLink);
      productData[0].qrCode = qr;
      res.productData = productData[0];
      res.productList = productList;
      return res;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  getProductBanner = async (id) => {
    const productBanner = await this.ProductDAO.getProductBanner(id);
    try {
      const res = {};
      res.banner = CommonUtil.convertPathToBuffer(productBanner);
      return res;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  getProductComponent = async (id) => {
    const productComponent = await this.ProductDAO.getProductComponent(id);
    try {
      const res = {};
      res.component = CommonUtil.convertPathToBuffer(productComponent);
      return res;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  getProductListByIdx = async (productList) => {
    try {
      const productListData = await this.ProductDAO.getProductListByIdx(
        productList
      );
      const data = CommonUtil.convertPathToBuffer(productListData);
      return data;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
}

module.exports = ProductService;
