# @eggjs/compressible

[![NPM version][npm-image]][npm-url]
[![Node.js CI](https://github.com/eggjs/compressible/actions/workflows/nodejs.yml/badge.svg)](https://github.com/eggjs/compressible/actions/workflows/nodejs.yml)
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![Node.js Version](https://img.shields.io/node/v/@eggjs/compressible.svg?style=flat)](https://nodejs.org/en/download/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/eggjs/compressible)

[npm-image]: https://img.shields.io/npm/v/@eggjs/compressible.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggjs/compressible
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/compressible.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/compressible?branch=master
[snyk-image]: https://snyk.io/test/npm/@eggjs/compressible/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@eggjs/compressible
[download-image]: https://img.shields.io/npm/dm/@eggjs/compressible.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggjs/compressible

Compressible `Content-Type` / `mime` checking.

Forked [compressible](https://github.com/jshttp/compressible) for TypeScript and keep mime-db as same version as mime-types.

## Installation

```sh
npm install @eggjs/compressible
```

## API

```ts
import { compressible } from '@eggjs/compressible';
```

### compressible(type)

Checks if the given `Content-Type` is compressible. The `type` argument is expected
to be a value MIME type or `Content-Type` string, though no validation is performed.

The MIME is looked up in the [`mime-db`](https://www.npmjs.com/package/mime-db) and
if there is compressible information in the database entry, that is returned. Otherwise,
this module will fallback to `true` for the following types:

* `text/*`
* `*/*+json`
* `*/*+text`
* `*/*+xml`

If this module is not sure if a type is specifically compressible or specifically
uncompressible, `undefined` is returned.

```ts
compressible('text/html') // => true
compressible('image/png') // => false
```

## License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=eggjs/compressible)](https://github.com/eggjs/compressible/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
