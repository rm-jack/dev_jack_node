require("dotenv").config();

const jwt = require("jsonwebtoken");
const secreteKey = process.env.JWTSECRETEKEY;
const accessExpiresIn = "1h";
const refreshExpiresIn = "1d";
const issuer = "admin";

const accsesOption = { expriresIn: accessExpiresIn, issuer };
const refreshOption = { expriresIn: refreshExpiresIn, issuer };

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

async function makeAccessToken(payload) {
  try {
    return await jwt.sign(payload, secreteKey, accsesOption);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

async function makeRefreshToken(payload) {
  try {
    return await jwt.sign(payload, secreteKey, refreshOption);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

async function validJWT(token, secreteKey) {
  let user = undefined;
  try {
    user = await jwt.verify(token, secreteKey);
    return user;
  } catch (e) {
    if (e.name == "TokenExpiredError") {
      return TOKEN_EXPIRED;
    } else {
      return TOKEN_INVALID;
    }
  }
}

async function checkToken(req, res, next) {
  try {
    let accessToken = req.header("accessToken");
    let refreshToken = req.header("refreshToken");
    let user = undefined;
    // 토큰 없음
    if (!accessToken || "null" == accessToken || null == accessToken) {
      if (!refreshToken || "null" == refreshToken || null == refreshToken)
        return res.status(400).json("로그인을 다시 진행해주세요.");
      else {
        user = await validJWT(refreshToken, secretKey);

        // 유효기간 만료
        if (user === TOKEN_EXPIRED)
          return res.status(401).json("토큰이 만료되었습니다.");
        // 유효하지 않는 토큰
        if (user === TOKEN_INVALID)
          return res.status(401).json("잘못된 접근입니다.");
        if (user.user_idx === undefined)
          return res.status(401).json("잘못된 접근입니다.");

        const newAccessToken = await makeAccessToken({
          user_idx: user.user_idx,
          loginTime: new Date(),
        });
        accessToken = newAccessToken;
        req.user_idx = user.user_idx;
      }
    } else {
      user = await validJWT(accessToken, secretKey);

      // 유효기간 만료
      if (user === TOKEN_EXPIRED) {
        user = await validJWT(refreshToken, secretKey);
        // 유효기간 만료
        if (user === TOKEN_EXPIRED)
          return res.status(401).json("토큰이 만료되었습니다.");
        // 유효하지 않는 토큰
        if (user === TOKEN_INVALID)
          return res.status(401).json("잘못된 접근입니다.");
        if (user.user_idx === undefined)
          return res.status(401).json("잘못된 접근입니다.");

        const newAccessToken = await makeAccessToken({
          user_idx: user.user_idx,
          loginTime: new Date(),
        });
        req.user_idx = user.user_idx;
        accessToken = newAccessToken;
      }
      user = await validJWT(refreshToken, secretKey);
      // 유효기간 만료
      if (user === TOKEN_EXPIRED) {
        user = await validJWT(accessToken, secretKey);
        const newRefreshToken = await makeAccessToken({
          user_idx: user.user_idx,
          loginTime: new Date(),
        });
        refreshToken = newRefreshToken;
      }
      // 유효하지 않는 토큰
      if (user === TOKEN_INVALID)
        return res.status(401).json("잘못된 접근입니다.");
      if (user.user_idx === undefined)
        return res.status(401).json("잘못된 접근입니다.");
      // decode
      req.user_idx = user.user_idx;
    }

    res.header("Access-Control-Expose-Headers", "accessToken,refreshToken");
    res.header("accessToken", accessToken);
    res.header("refreshToken", refreshToken);
    next();
  } catch (e) {
    res.status(400).json("로그인을 다시 진행해주세요.");
  }
}

module.exports = { makeAccessToken, makeRefreshToken, checkToken };
