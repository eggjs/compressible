# Changelog

## [3.0.0](https://github.com/eggjs/compressible/compare/v2.0.18...v3.0.0) (2025-03-12)


### ⚠ BREAKING CHANGES

* drop Node.js < 18.19.0 support

part of https://github.com/eggjs/egg/issues/3644

https://github.com/eggjs/egg/issues/5257

- change mime-db to 1.52.0

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->

## Summary by CodeRabbit

- **New Features**
- Rebranded the package as “@eggjs/compressible” with enhanced
TypeScript support, updated module exports, and improved type
definitions.
  
- **Documentation**
- Revised the README with new badges, installation instructions, usage
examples, and contributor information.
  - Updated LICENSE with a new copyright entry.
  
- **Refactor**
- Migrated the core compressibility functionality from JavaScript to a
streamlined TypeScript implementation.
  
- **Tests**
- Added comprehensive tests to ensure robust handling of various MIME
type inputs.
  
- **Chores**
- Improved development tooling and updated CI workflows for build,
release, and package publishing.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

* support cjs and esm both by tshy ([#1](https://github.com/eggjs/compressible/issues/1)) ([6d0d7cc](https://github.com/eggjs/compressible/commit/6d0d7ccfc75a00d8a98651fbd930fccba0b11454))

## [3.0.0](https://github.com/eggjs/compressible/compare/v2.0.18...v3.0.0) (2025-03-12)


### ⚠ BREAKING CHANGES

* drop Node.js < 18.19.0 support

part of https://github.com/eggjs/egg/issues/3644

https://github.com/eggjs/egg/issues/5257

- change mime-db to 1.52.0

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->

## Summary by CodeRabbit

- **New Features**
- Rebranded the package as “@eggjs/compressible” with enhanced
TypeScript support, updated module exports, and improved type
definitions.
  
- **Documentation**
- Revised the README with new badges, installation instructions, usage
examples, and contributor information.
  - Updated LICENSE with a new copyright entry.
  
- **Refactor**
- Migrated the core compressibility functionality from JavaScript to a
streamlined TypeScript implementation.
  
- **Tests**
- Added comprehensive tests to ensure robust handling of various MIME
type inputs.
  
- **Chores**
- Improved development tooling and updated CI workflows for build,
release, and package publishing.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

* support cjs and esm both by tshy ([#1](https://github.com/eggjs/compressible/issues/1)) ([6d0d7cc](https://github.com/eggjs/compressible/commit/6d0d7ccfc75a00d8a98651fbd930fccba0b11454))

unreleased
==========

  * deps: mime-db@'>= 1.52.0 < 2'

2.0.18 / 2020-01-05
===================

  * deps: mime-db@'>= 1.43.0 < 2'
    - Mark `font/ttf` as compressible
    - Remove compressible from `multipart/mixed`

2.0.17 / 2019-04-24
===================

  * deps: mime-db@'>= 1.40.0 < 2'

2.0.16 / 2019-02-18
===================

  * deps: mime-db@'>= 1.38.0 < 2'
    - Mark `text/less` as compressible

2.0.15 / 2018-09-17
===================

  * deps: mime-db@'>= 1.36.0 < 2'

2.0.14 / 2018-06-05
===================

  * deps: mime-db@'>= 1.34.0 < 2'
    - Mark all XML-derived types as compressible

2.0.13 / 2018-02-17
===================

  * deps: mime-db@'>= 1.33.0 < 2'

2.0.12 / 2017-10-20
===================

  * deps: mime-db@'>= 1.30.0 < 2'

2.0.11 / 2017-07-27
===================

  * deps: mime-db@'>= 1.29.0 < 2'

2.0.10 / 2017-03-23
===================

  * deps: mime-db@'>= 1.27.0 < 2'

2.0.9 / 2016-10-31
==================

  * Fix regex fallback to not override `compressible: false` in db
  * deps: mime-db@'>= 1.24.0 < 2'

2.0.8 / 2016-05-12
==================

  * deps: mime-db@'>= 1.23.0 < 2'

2.0.7 / 2016-01-18
==================

  * deps: mime-db@'>= 1.21.0 < 2'

2.0.6 / 2015-09-29
==================

  * deps: mime-db@'>= 1.19.0 < 2'

2.0.5 / 2015-07-30
==================

  * deps: mime-db@'>= 1.16.0 < 2'

2.0.4 / 2015-07-01
==================

  * deps: mime-db@'>= 1.14.0 < 2'
  * perf: enable strict mode

2.0.3 / 2015-06-08
==================

  * Fix regex fallback to work if type exists, but is undefined
  * perf: hoist regex declaration
  * perf: use regex to extract mime
  * deps: mime-db@'>= 1.13.0 < 2'

2.0.2 / 2015-01-31
==================

  * deps: mime-db@'>= 1.1.2 < 2'

2.0.1 / 2014-09-28
==================

  * deps: mime-db@1.x
    - Add new mime types
    - Add additional compressible
    - Update charsets


2.0.0 / 2014-09-02
==================

  * use mime-db
  * remove .get()
  * specifications are now private
  * regex is now private
  * stricter regex
