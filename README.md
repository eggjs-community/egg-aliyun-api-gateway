# egg-aliyun-api-gateway

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aliyun-api-gateway.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aliyun-api-gateway
[travis-image]: https://img.shields.io/travis/thonatos/egg-aliyun-api-gateway.svg?style=flat-square
[travis-url]: https://travis-ci.org/thonatos/egg-aliyun-api-gateway
[codecov-image]: https://img.shields.io/codecov/c/github/thonatos/egg-aliyun-api-gateway.svg?style=flat-square
[codecov-url]: https://codecov.io/github/thonatos/egg-aliyun-api-gateway?branch=master
[david-image]: https://img.shields.io/david/thonatos/egg-aliyun-api-gateway.svg?style=flat-square
[david-url]: https://david-dm.org/thonatos/egg-aliyun-api-gateway
[snyk-image]: https://snyk.io/test/npm/egg-aliyun-api-gateway/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-aliyun-api-gateway
[download-image]: https://img.shields.io/npm/dm/egg-aliyun-api-gateway.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aliyun-api-gateway

<!--
Description here.
-->

egg plugin for [aliyun-api-gateway](https://www.aliyun.com/product/apigateway?spm=5176.8142029.388261.285.715c4636wRT8p1)

## Install

```bash
$ npm i egg-aliyun-api-gateway --save
```

## Usage

- GET 

```
app.aliyunApiGateway.get(url)
```

- POST 

```
app.aliyunApiGateway.post(url, data)
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.aliyunApiGateway = {
  enable: true,
  package: 'egg-aliyun-api-gateway',
};
```

```js
// {app_root}/config/config.default.js
exports.aliyunApiGateway = {
  appKey: '',
  appSecret: '',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

- Generator

```
'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    * get() {
      const { ctx, app } = this;
      const url = 'https://openapi.insta360.com/community/v1/dailySelection/list?date=2017-07-16&days=1';
      try {
        ctx.body = yield app.aliyunApiGateway.get(url);
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }

    * post() {
      const { ctx, app } = this;
      const url = 'https://openapi.insta360.com/community/v1/post/update';
      const data = {
        id: {id},
        info: {info},
      };
      try {
        ctx.body = yield app.aliyunApiGateway.post(url, data);
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }

  };
};
```

- Async

```
'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    async get() {
      const { ctx, app } = this;
      const url = 'https://openapi.insta360.com/community/v1/dailySelection/list?date=2017-07-16&days=1';
      try {
        ctx.body = await app.aliyunApiGateway.get(url);
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }

    async post() {
      const { ctx, app } = this;
      const url = 'https://openapi.insta360.com/community/v1/post/update';
      const data = {
        id: {id},
        info: {info},
      };
      try {
        ctx.body = await app.aliyunApiGateway.post(url, data);
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }

  };
};
```

## Feature

- [api-gateway-nodejs-sdk](https://github.com/aliyun/api-gateway-nodejs-sdk)
- [https://help.aliyun.com/document_detail/29464.html](https://help.aliyun.com/document_detail/29464.html)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
