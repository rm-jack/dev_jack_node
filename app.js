var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const { swaggerUi, specs } = require("./Swagger");
const swaggerFile = require("./swagger-output.json");
const noticeRouter = require("./notice/controller/NoticeController");
const domainDataRouter = require("./domainData/controller/DomainDataController");
const productRouter = require("./product/controller/ProductController");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "assets")));

//router
app.use("/notice", noticeRouter);
app.use("/domainData", domainDataRouter);
app.use("/product", productRouter);
//swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
