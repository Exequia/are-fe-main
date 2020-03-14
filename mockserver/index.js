var mockServer = require("node-mock-server");
var path = require("path");

mockServer({
  restPath: path.join(__dirname, "/api"),
  uiPath: "/",
  title: "Are front mock server",
  version: 1,
  urlBase: "http://localhost:3001",
  urlPath: "/api/v1",
  port: 3001,
  contentType: "application/json",
  accessControlExposeHeaders: "X-Total-Count",
  accessControlAllowOrigin: "*",
  accessControlAllowMethods: "GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD",
  accessControlAllowHeaders: "origin, x-requested-with, content-type",
  accessControlAllowCredentials: "true",
  headers: {},
  open: true,
  dirName: __dirname
});