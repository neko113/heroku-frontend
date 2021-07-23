const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use("/", serveStatic(path.join(__dirname, "/dist")));
//여기에서 dist를 서버 앱 파일로 구성하고 있습니다.
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});
//이 * 경로는 루트 '/'를 제외한 다른 페이지 경로에서 프로젝트를 제공하기 위한 것입니다.
const port = process.env.PORT || 8080;
app.listen(port);
