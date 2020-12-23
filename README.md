<!-- [![Github Actions](https://github.com/euberdeveloper/dree/workflows/Test/badge.svg)](https://github.com/euberdeveloper/dree/actions)
[![Build Status](https://travis-ci.org/euberdeveloper/dree.svg?branch=master)](https://travis-ci.org/euberdeveloper/dree) -->
[![Known Vulnerabilities](https://snyk.io/test/github/euberdeveloper/euberlog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/euberdeveloper/euberlog?targetFile=package.json)
[![dependencies Status](https://david-dm.org/euberdeveloper/euberlog/status.svg)](https://david-dm.org/euberdeveloper/euberlog)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/npm/l/euberlog.svg)](https://github.com/euberdeveloper/euberlog/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/euberdeveloper/euberlog.svg)](https://github.com/euberdeveloper/euberlog/issues)
[![GitHub stars](https://img.shields.io/github/stars/euberdeveloper/euberlog.svg)](https://github.com/euberdeveloper/euberlog/stargazers)
![npm](https://img.shields.io/npm/v/euberlog.svg)

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

## Br and hr

```js
const { Logger } = require('euberlog');
const logger = new Logger();

// Prints one line of '-'
logger.hr();

// Prints 4 empty lines
logger.br(4);

// Prints two lines of red '*'
logger.hr(2, 'red', '*');
```

## With scope

```js
const { Logger } = require('euberlog');
const logger = new Logger('MAIN');

// Adds {MAIN} before the message
logger.info('Informazione');
logger.success('Successo!!!');
logger.error('The error is:', new Error('Errore'));
```

## With options

```js
const { Logger } = require('euberlog');
const logger = new Logger({
    scope: 'MYSCOPE',
    debug: false, // Hides the debug logs
    palette: { // Overrides the default colour palette
        primary: {
            info: 'orange',
            success: '(146, 133, 255)'
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

## API

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

* __info__: The colour for the info logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255, 255, 255)'`) or a css keyword (such as `'orange'`)
* __success__: The colour for the success logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255, 255, 255)'`) or a css keyword (such as `'orange'`)
* __debug__: The colour for the debug logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255, 255, 255)'`) or a css keyword (such as `'orange'`)
* __warning__: The colour for the warning logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255, 255, 255)'`) or a css keyword (such as `'orange'`)
* __error__: The colour for the error logs. Note: the colour can be a valid `chalk` colour (such as `'white'`), an hex colour (such as `'#FFFFFF'`), an RGB colour (such as `'(255, 255, 255)'`) or a css keyword (such as `'orange'`)

**Methods:**

* __info(message: string, object?: any): void__: Logs an info message. The format is "[INFO] |{SCOPE}| message |object|", where |word| is optional.
* __success(message: string, object?: any): void__: Logs an success message. The format is "[SUCCESS] |{SCOPE}| message |object|", where |word| is optional.
* __debug(message: string, object?: any): void__: Logs an debug message. The format is "[DEBUG] |{SCOPE}| message |object|", where |word| is optional.
* __warning(message: string, object?: any): void__: Logs an warning message. The format is "[WARNING] |{SCOPE}| message |object|", where |word| is optional.
* __error(message: string, object?: any): void__: Logs an error message. The format is "[ERROR] |{SCOPE}| message |object|", where |word| is optional.
* __br(n?: number): void__: Logs `n` empty lines. The default value of `n` is `1`.
* __hr(n?: number, color?: string, symbol: string): void__: Logs `n` hr lines, coloured with `color` and constituted by `symbol` characters. THe default value of `n` is `1`, the default colour is `'white'` and the default symbol is `'-'`.
* __setOptions(options?: Options | string): void__: It changes the options of the logger instance. It is almost as using the class constructor, with the difference that a new instance will not be created.

## Build

To build the module make sure you have the dev dependencies installed.

The project is written in `Typescript`, bundled with `Webpack` and linted with `ESLint`.

### Lint

In order to lint the source code:

```bash
$ npm run lint
```

In order to lint and fix the source code:

```bash
$ npm run lint:fix
```

### Transpile

```bash
$ npm run transpile
```

The `source` folder will be compiled in the `dist` folder. Also the `type declarations` will be generated.

### Bundle

```bash
$ npm run bundle
```

The `source` folder will be compiled in the `bundled` folder. It will contain the bundled `index.js` and `index.d.ts` files.