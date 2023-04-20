const path = require("path");
const fs = require("fs");
CommonUtil = {
  convertPathToBuffer(datas) {
    try {
      const res = datas.map((data) => {
        console.log(data);
        const imageFilePath = path.join(__dirname, "../", data.imagePath);
        console.log(imageFilePath);
        if (fs.existsSync(imageFilePath)) {
          const image = fs.readFileSync(imageFilePath);
          data.imageBuffer = Buffer.from(image).toString("base64");
        }
        return data;
      });
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
};

module.exports = { CommonUtil };
