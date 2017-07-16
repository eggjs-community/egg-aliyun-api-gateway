'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/aliyun-api-gateway.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/aliyun-api-gateway-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should return json data with code 200 GET /', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });
});
