'use strict';

const aliyunApiGateway = require('./lib/aliyun-api-gateway');

module.exports = agent => {
  if (agent.config.aliyunApiGateway.agent) aliyunApiGateway(agent);
};
