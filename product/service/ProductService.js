const { CommonUtil } = require("../../utils/CommonUtil");
const ProductDAO = require("../dao/ProductDAO");
const qr = require("qrcode");

class ProductService {
  constructor() {
    this.ProductDAO = new ProductDAO();
  }
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
    id = Number(id);
    const productData = await this.ProductDAO.getProductData(id);
    qr.toDataURL(productData[0].spatialLink, (err, src) => {
      if (err) return false;
      productData[0].qrCode = src;
    });
    const productBanner = await this.ProductDAO.getProductBanner(id);
    const productComponent = await this.ProductDAO.getProductComponent(id);

    try {
      const res = {};
      res.productData = productData;
      res.banner = CommonUtil.convertPathToBuffer(productBanner);
      //   res.banner = productBanner;
      res.component = CommonUtil.convertPathToBuffer(productComponent);
      //   res.component = productComponent;
      return res;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  getOtherProduct = async (productIdx, clickCount, offSet) =>{
    const res = await this.ProductDAO.getOtherProduct(); 
    console.log(res); 
    return true; 
  }; 
}

module.exports = ProductService;
