'use strict';

const aliyunApiGateway = require('./lib/aliyun-api-gateway');

module.exports = app => {
  aliyunApiGateway(app);
};
