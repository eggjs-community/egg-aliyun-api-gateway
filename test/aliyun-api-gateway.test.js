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

  it('should error with code 400 GET /', () => {
    return request(app.callback())
      .get('/')
      .expect(400);
  });
});
