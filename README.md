# egg-aliyun-api-gateway

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aliyun-api-gateway.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aliyun-api-gateway
[travis-image]: https://img.shields.io/travis/eggjs/egg-aliyun-api-gateway.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-aliyun-api-gateway
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-aliyun-api-gateway.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-aliyun-api-gateway?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-aliyun-api-gateway.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-aliyun-api-gateway
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

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
