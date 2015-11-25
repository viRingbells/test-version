# test-version
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

Test if a given version matches a version pattern

## Install

```
$ npm install test-version
```

## Usage

```
const test = require('test-version');

if (test('v1.0.0', '>=1.0.0')) {
    console.log('matched!');
}
else {
    console.log('not matched');
}
```

### Patters

version can be like:

```
1.0.0 => 1.0.0
1-0-0 => 1.0.0
v1.0  => 1.0
```

version pattern can be like:

```
1.0.0
1.0.x
1.0.*
~1.0.0
^1.0.0
>1.0.0
<1.0.0
1.0.0...1.9.9
1.0.0~1.9.9
```

[npm-image]: https://img.shields.io/npm/v/test-version.svg
[travis-image]: https://travis-ci.org/viRingbells/test-version.svg?branch=master
[npm-url]: https://www.npmjs.com/package/test-version
[travis-url]: https://travis-ci.org/viRingbells/test-version
