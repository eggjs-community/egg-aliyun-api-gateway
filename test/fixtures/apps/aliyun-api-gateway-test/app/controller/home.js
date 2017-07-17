'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      const url = 'https://openapi.insta360.com/community/v1/dailySelection/list?date=2017-07-16&days=1';
      try {
        ctx.body = yield app.aliyunApiGateway.get(url);
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }
  };
};
