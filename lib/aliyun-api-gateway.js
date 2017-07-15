'use strict';

const assert = require('assert');
const Client = require('aliyun-api-gateway').Client;

module.exports = app => {
  const { aliyunApiGateway } = app.config;
  const { appKey, appSecret } = aliyunApiGateway;
  assert(appKey && appSecret,
    '[egg-aliyun-api-geteway] Must set `appKey` and `appSecret` in aliyun-api-geteway\'s config');
  app.coreLogger.info('[egg-egg-aliyun-api-geteway] setup');
  app.aliyunApiGateway = new Client(appKey, appSecret);
};
