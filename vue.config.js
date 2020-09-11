/*const mockIndexData = require("./src/components/mock/index.json");
module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get("/info", (req, res) => {
        res.json(mockIndexData.info);
      });
    }
  }
};*/

const Mock = require('mockjs');
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    port: 8080,
    before(app) { //第二种方式
      app.get("/info", (req, res) => {
        res.json(Mock.mock({
          code: 0,
          data: {
            total: 20,
            'items|20': [{
              order_no: '@guid()',
              timestamp: +Mock.Random.date('T'),
              username: '@name()',
              price: '@float(1000, 15000, 0, 2)',
              'status|1': ['success', 'pending']
            }]
          }
        }));
      });
    }
  }
};