'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      const url = 'https://openapi.insta360.com/community/v1/dailySelection/list?date=2017-07-16&days=1';
      try {
        const result = await app.aliyunApiGateway.get(url);
        ctx.status = 200;
        ctx.body = result;
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }
  };
};
