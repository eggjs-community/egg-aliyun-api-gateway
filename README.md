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

## Install

```bash
$ npm i egg-aliyun-api-gateway --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.aliyunApiGateway = {
  enable: true,
  package: 'egg-aliyun-api-gateway',
};
```

## Configuration

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

```
'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      const url = 'https://dm-81.data.aliyun.com/rest/160601/ip/getIpInfo.json?ip=210.75.225.254';
      try {
        const result = await app.aliyunApiGateway.get(url);
        app.coreLogger.info(result);
        ctx.body = result;
      } catch (error) {
        app.coreLogger.info(error);
        ctx.status = 400;
        ctx.body = error.toString();
      }
    }
  };
};
```

[api-gateway-nodejs-sdk](https://github.com/aliyun/api-gateway-nodejs-sdk)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
