![Lint](https://github.com/euberdeveloper/euberlog/workflows/Lint/badge.svg)
![Build](https://github.com/euberdeveloper/euberlog/workflows/Build/badge.svg)
![Test](https://github.com/euberdeveloper/euberlog/workflows/Test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/euberdeveloper/euberlog/badge.svg?branch=main)](https://coveralls.io/github/euberdeveloper/euberlog?branch=main)
[![codecov](https://codecov.io/gh/euberdeveloper/euberlog/branch/main/graph/badge.svg?token=4YW49XC338)](https://codecov.io/gh/euberdeveloper/euberlog)
[![Known Vulnerabilities](https://snyk.io/test/github/euberdeveloper/euberlog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/euberdeveloper/euberlog?targetFile=package.json)
[![dependencies Status](https://david-dm.org/euberdeveloper/euberlog/status.svg)](https://david-dm.org/euberdeveloper/euberlog)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/npm/l/euberlog.svg)](https://github.com/euberdeveloper/euberlog/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/euberdeveloper/euberlog.svg)](https://github.com/euberdeveloper/euberlog/issues)
[![GitHub stars](https://img.shields.io/github/stars/euberdeveloper/euberlog.svg)](https://github.com/euberdeveloper/euberlog/stargazers)
![npm](https://img.shields.io/npm/v/euberlog.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Types](https://img.shields.io/npm/types/euberlog.svg)](https://www.npmjs.com/package/euberlog)
[![Maintainability](https://api.codeclimate.com/v1/badges/898fd5ca5774fb92d9c8/maintainability)](https://codeclimate.com/github/euberdeveloper/euberlog/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/898fd5ca5774fb92d9c8/test_coverage)](https://codeclimate.com/github/euberdeveloper/euberlog/test_coverage)

# euberlog
A beautiful nodejs logger.

## Install

To install euberlog, run:

```bash
$ npm install euberlog
```

## Usage

## Simple

```js
const { Logger } = require('euberlog');
const logger = new Logger();

logger.info('Informazione');
logger.success('Successo!!!');
logger.debug('Debug');
logger.warning('Warning!!');
logger.error('Errore');

logger.info('My car is:', { constructor: 'Toyota', model: 'Yaris', year: 2004 });
```

![Simple example](https://github.com/euberdeveloper/euberlog/raw/main/docs/assets/simple.png)

## Br and hr

```js
const { Logger } = require('euberlog');
const logger = new Logger();

// Prints one line of '-'
logger.hr();

// Prints two empty lines
logger.br(2);

logger.info('My name is Eugenio');

// Prints two empty lines
logger.br(2);

// Prints five lines of red '*'
logger.hr(5, 'red', '*');
```

![Simple example](https://github.com/euberdeveloper/euberlog/raw/main/docs/assets/br_and_hr.png)

## With scope

```js
const { Logger } = require('euberlog');
const logger = new Logger('MAIN');

// Adds {MAIN} before the message
logger.info('Informazione');
logger.success('Successo!!!');
logger.error('The error is:', new Error('Errore'));
```
![Simple example](https://github.com/euberdeveloper/euberlog/raw/main/docs/assets/with_scope.png)

## With options

```js
const { Logger } = require('euberlog');
const logger = new Logger({
    scope: 'MYSCOPE',
    debug: false, // Hides the debug logs
    palette: { // Overrides the default colour palette
        primary: {
            info: 'orange',
            success: '(146,133,255)'
        },
        secondary: {
            info: '#ffd485',
            success: 'blue'
        }
    }
});

logger.info('Informazione');
logger.success('Successo!!!');
logger.debug('This is not shown');
```

![Simple example](https://github.com/euberdeveloper/euberlog/raw/main/docs/assets/with_options.png)

## API

The documentation site is: [euberlog documentation](https://euberlog.euber.dev)

The documentation for development site is: [euberlog dev documentation](https://euberlog-dev.euber.dev)

### Logger

 The logger class, its instances will be the euber loggers.

**Syntax:**

`const logger = new Logger(options);`

**Options:**

The options parameter is a `string` or a `Options` object. If it is a string, it like passing an `Options` object with only the property `scope` with that string as value.

**Options parameters:**

* __scope__: Optional. A `string` representing the scope of the logger. It is prepended between `{}` before each message. If it is `null` the scope will not be printed.
* __debug__: Optional. If `true`, the debug messages will be printed.
* __palette__: Optional. An `object` of type `Palette` representing the colours used by the logger.

**Palette parameters:**

* __primary__: Optional. An `object` of `PaletteDefinitions` type that defines the colours for the primary part of a message, namely the `[TAG]` and an eventual `{SCOPE}`.
* __secondary__: Optional. An `object` of `PaletteDefinitions` type that defines the colours for the secondary part of a message, namely the message passed to the logger function.

**PaletteDefinitions:**

* __info__: The colour for the info logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255,255,255)'`) or a css keyword (such as `'orange'`)
* __success__: The colour for the success logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255,255,255)'`) or a css keyword (such as `'orange'`)
* __debug__: The colour for the debug logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255,255,255)'`) or a css keyword (such as `'orange'`)
* __warning__: The colour for the warning logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255,255,255)'`) or a css keyword (such as `'orange'`)
* __error__: The colour for the error logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255,255,255)'`) or a css keyword (such as `'orange'`)

Note: the __default_options__ are:

```js
const DEFAULT_OPTIONS = {
    palette: {
        primary: {
            info: 'blue',
            success: 'green',
            debug: 'gray',
            warning: 'yellow',
            error: 'red'
        },
        secondary: {
            info: '#81A2BE',
            success: '#B5BD68',
            debug: '#C5C8C6',
            warning: '#F0C674',
            error: '#CC6666'
        }
    },
    debug: true,
    scope: null
};
```

**Methods:**

* __info(message: string, object?: any): void__: Logs an info message. The format is `[INFO] |{SCOPE}| message |object|`, where `|word|` is optional.
* __success(message: string, object?: any): void__: Logs an success message. The format is `[SUCCESS] |{SCOPE}| message |object|`, where `|word|` is optional.
* __debug(message: string, object?: any): void__: Logs an debug message. The format is `[DEBUG] |{SCOPE}| message |object|`, where `|word|` is optional.
* __warning(message: string, object?: any): void__: Logs an warning message. The format is `[WARNING] |{SCOPE}| message |object|`, where `|word|` is optional.
* __error(message: string, object?: any): void__: Logs an error message. The format is `[ERROR] |{SCOPE}| message |object|`, where `|word|` is optional.
* __br(n?: number): void__: Logs `n` empty lines. The default value of `n` is `1`.
* __hr(n?: number, color?: string, symbol: string): void__: Logs `n` hr lines, coloured with `color` and constituted by `symbol` characters. THe default value of `n` is `1`, the default colour is `'white'` and the default symbol is `'-'`.
* __setOptions(options?: Options | string): void__: It changes the options of the logger instance. It is almost as using the class constructor, with the difference that a new instance will not be created.

## Development

To build the module make sure you have the dev dependencies installed.

The project is written in `Typescript`, bundled with `Webpack` and linted with `ESLint`.

### Lint

In order to lint the code:

```bash
$ npm run lint
```

In order to lint and fix the code:

```bash
$ npm run lint:fix
```

There are also the `:source` and `:test` suffix after `lint` in order to lint only the source code or the test code.

### Transpile

To transpile both the source and the test code:

```bash
$ npm run transpile
```

The `source` and the `test` folders will be transpiled in the `dist` folder. Also the `type declarations` will be generated.


To transpile only the source code:

```bash
$ npm run transpile:source
```

The `source` folder will be transpiled in the `dist` folder. Also the `type declarations` will be generated.

### Test

After having transpiled the code, run:

```bash
$ npm test
```

in order to run the tests with `mocha`.

If a coverage report is to be generated, run:

```bash
$ npm run nyc
```

### Bundle

```bash
$ npm run bundle
```

The `source` folder will be compiled in the `bundled` folder. It will contain the bundled `index.js` and `index.d.ts` files.
