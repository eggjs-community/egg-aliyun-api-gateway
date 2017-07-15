'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      const url = 'https://dm-81.data.aliyun.com/rest/160601/ip/getIpInfo.json?ip=210.75.225.254';
      try {
        const result = await app.aliyunApiGateway.get(url);
        app.coreLogger.info(result);
      } catch (error) {
        app.coreLogger.info(error);
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }
  };
};
