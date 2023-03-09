![Lint](https://github.com/euberdeveloper/euberlog/workflows/Lint/badge.svg)
![Build](https://github.com/euberdeveloper/euberlog/workflows/Build/badge.svg)
![Test](https://github.com/euberdeveloper/euberlog/workflows/Test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/euberdeveloper/euberlog/badge.svg?branch=main)](https://coveralls.io/github/euberdeveloper/euberlog?branch=main)
[![codecov](https://codecov.io/gh/euberdeveloper/euberlog/branch/main/graph/badge.svg?token=4YW49XC338)](https://codecov.io/gh/euberdeveloper/euberlog)
[![Known Vulnerabilities](https://snyk.io/test/github/euberdeveloper/euberlog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/euberdeveloper/euberlog?targetFile=package.json)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/npm/l/euberlog.svg)](https://github.com/euberdeveloper/euberlog/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/euberdeveloper/euberlog.svg)](https://github.com/euberdeveloper/euberlog/issues)
[![GitHub stars](https://img.shields.io/github/stars/euberdeveloper/euberlog.svg)](https://github.com/euberdeveloper/euberlog/stargazers)
![npm](https://img.shields.io/npm/v/euberlog.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Types](https://img.shields.io/npm/types/euberlog.svg)](https://www.npmjs.com/package/euberlog)
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

## Default instance

There is a default export consisting in an instance of `Logger` with default options

```js
const logger = require('euberlog').default;

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

### Default instance

There is a default export consisting in an instance of `Logger` with default options

## Project structure

[//]: # (dree - BEGIN)
Made with [dree](https://github.com/marketplace/actions/ga-dree)


```
euberlog
 ├── .eslintignore
 ├── .eslintrc.cjs
 ├─> .git
 │   ├── FETCH_HEAD
 │   ├── HEAD
 │   ├─> branches
 │   ├── config
 │   ├── description
 │   ├─> hooks
 │   │   ├── applypatch-msg.sample
 │   │   ├── commit-msg.sample
 │   │   ├── fsmonitor-watchman.sample
 │   │   ├── post-update.sample
 │   │   ├── pre-applypatch.sample
 │   │   ├── pre-commit.sample
 │   │   ├── pre-merge-commit.sample
 │   │   ├── pre-push.sample
 │   │   ├── pre-rebase.sample
 │   │   ├── pre-receive.sample
 │   │   ├── prepare-commit-msg.sample
 │   │   ├── push-to-checkout.sample
 │   │   └── update.sample
 │   ├── index
 │   ├─> info
 │   │   └── exclude
 │   ├─> logs
 │   │   ├── HEAD
 │   │   └─> refs
 │   │       ├─> heads
 │   │       │   └── main
 │   │       └─> remotes
 │   │           └─> origin
 │   │               └── main
 │   ├─> objects
 │   │   ├─> 03
 │   │   │   └── dee74a3eae93b4beb0679865da46f1b1c0da73
 │   │   ├─> 05
 │   │   │   └── c771fab089436aca9d38397e2ba672f7806e3a
 │   │   ├─> 07
 │   │   │   └── ab46e3f4d4a4de35cbce663315462fe0b7958d
 │   │   ├─> 0b
 │   │   │   └── ec28db0f3edbe6f48919b3b4612d31e8c35a16
 │   │   ├─> 10
 │   │   │   └── aa0dbe5cd2c005083db71f09e4d41f286cf700
 │   │   ├─> 18
 │   │   │   └── 8aeef3435d8b678b683c8076d5afdfdabd4b0c
 │   │   ├─> 1b
 │   │   │   └── db495e2e2547289af3e1d691b8d4024e44aa87
 │   │   ├─> 1e
 │   │   │   └── d6d0e05175fa6679371522b760fd3e96d6db28
 │   │   ├─> 25
 │   │   │   └── cc34fbd9f6101126af82d16d9385bd0adea2f7
 │   │   ├─> 26
 │   │   │   └── dd398f4d6c9a0fcae8247b54ba1712173370c2
 │   │   ├─> 29
 │   │   │   └── 3ed6a7da283a4f338bb65c3db654cfa6a38cd3
 │   │   ├─> 2a
 │   │   │   └── 96bc4a1f6bf1753e99a1ced903f2b0cc40d956
 │   │   ├─> 2b
 │   │   │   └── 048028d4d9df0c38a47c7a4f4f6a8de09b160c
 │   │   ├─> 2d
 │   │   │   └── 59aabff3c4e19d84e6fe422873307ecce306f9
 │   │   ├─> 2f
 │   │   │   └── e345c15451a9059409b28b3ae03de5847505f7
 │   │   ├─> 30
 │   │   │   └── 975ccee811444a52b247e366b60ad41702767c
 │   │   ├─> 31
 │   │   │   └── 75b36c627d4b7bac1ce7affe905f2d7e65740d
 │   │   ├─> 35
 │   │   │   └── 1b52a90327409bdd2f0de44a56fc88e26feba4
 │   │   ├─> 3a
 │   │   │   └── 612ecf3500326495b6142798c55058336e6011
 │   │   ├─> 3b
 │   │   │   └── 430c16b7f088986b5937d3c98b89cf584d5814
 │   │   ├─> 43
 │   │   │   └── 895ca23b63d0bd34071847fe762fae113b2165
 │   │   ├─> 47
 │   │   │   └── a7664590b925d1330cdab48057c65f5ebd7355
 │   │   ├─> 4a
 │   │   │   └── ba9480f21cba602f9e5648e4a3b32246007a41
 │   │   ├─> 4c
 │   │   │   └── 77cf61081335bf67e48d8a7618369fa7e06762
 │   │   ├─> 4f
 │   │   │   └── 378e85ffc5e46ecd72f5b4a863131d93dfa4cf
 │   │   ├─> 51
 │   │   │   ├── cd359103455cfee51e35532c319d7cc0c1b38a
 │   │   │   └── d2420ce358174d43f4e14b3481255bfefcbf53
 │   │   ├─> 52
 │   │   │   └── c3553913de01deff3b338bf65c046e8a01e817
 │   │   ├─> 54
 │   │   │   └── 87013fa8fa2d89a5eb9d8956d27367cf332625
 │   │   ├─> 55
 │   │   │   └── 1b25748d539496ea17560bb740ca999e579c65
 │   │   ├─> 56
 │   │   │   └── 14e99459bf235c5f986633302ee6fedc39ba22
 │   │   ├─> 57
 │   │   │   └── 23f6cefdcbc657f47db3cc5722a9d26e18a0c1
 │   │   ├─> 59
 │   │   │   ├── 12585c3427f33665b55cbf97e54a0456cecbbc
 │   │   │   └── 7f346075fb439949a9b3416341c1844d559526
 │   │   ├─> 5b
 │   │   │   └── be8340d1b47bbae9ad56233ca3417d4a3b8085
 │   │   ├─> 5c
 │   │   │   └── 15c5c0dda9077d886b10b01bcf013df370c267
 │   │   ├─> 5e
 │   │   │   └── 0a5ecbe8b389993df5ed79a28e9546370008e9
 │   │   ├─> 60
 │   │   │   ├── 09f82cb44a9ab87b3580577e784cfe34b57d83
 │   │   │   ├── 98c0c102b92b20436d1c187f1252d901492aab
 │   │   │   ├── a382ec18e20d4d9bbb9334507c0a232de06647
 │   │   │   └── c7f2ed53e97a28502d909e1be8641df05d3a20
 │   │   ├─> 63
 │   │   │   └── 40ed6b879604e27babf51c1c9723b260fb8839
 │   │   ├─> 67
 │   │   │   ├── 6c4e63b9c0bc87ccde0e9b0d8a9575a95930d1
 │   │   │   └── fe9d264a4333bff3300ad4ca96a192b8eb7124
 │   │   ├─> 69
 │   │   │   └── 3a22630ca2c5dfb27e11aac8cdc308f0f61f3f
 │   │   ├─> 6d
 │   │   │   └── 3858a638c834fa15c0dbd37825668d830c792d
 │   │   ├─> 6e
 │   │   │   └── 57aba8a3fc33d80754950a8c92b28123463206
 │   │   ├─> 75
 │   │   │   ├── 68d03c2dd5c9451ac24f251fd9e56df0d12754
 │   │   │   └── b5ea6071482b8ec7664f24d52f538a3be9f0f6
 │   │   ├─> 7c
 │   │   │   ├── 27e6211713ac75921f748ffdf82e6d8c4e5873
 │   │   │   └── af41ffe1c58cb5b0b8eaa3a4112b0c728da858
 │   │   ├─> 7e
 │   │   │   ├── 9947c5c7adf701f76c0616b67ce29249b8c91e
 │   │   │   └── da7cb4597945c9cb9dd28357ab952a23fb2a06
 │   │   ├─> 82
 │   │   │   └── 623e47c8fcf042486ee0d51db2be6bfe2cf3ea
 │   │   ├─> 83
 │   │   │   └── d4734c27ed6f8a6426efc9f5c107afbdd5d76d
 │   │   ├─> 87
 │   │   │   └── 6473825f2d6ea1915031612b1e36e795230e4f
 │   │   ├─> 8d
 │   │   │   └── 431534f06940bb8adbeda4f1e3f033021bda13
 │   │   ├─> 92
 │   │   │   └── bb6cffd5d3f5b4418091f2619a6f98bc90c96e
 │   │   ├─> 93
 │   │   │   └── 71bf43f1e4fcef7cd8254fff1b67958b7a88ee
 │   │   ├─> 97
 │   │   │   ├── 4859b2edb736f1326568825d378990a6fd9cd0
 │   │   │   └── 5aef6e43e4644e07259422f511bc3fc1603448
 │   │   ├─> 9a
 │   │   │   └── ab31d553c15b11c716795282939571b3dc30cd
 │   │   ├─> 9b
 │   │   │   └── eaba1b7227aaaf512b8464d139a7df0290ad24
 │   │   ├─> 9e
 │   │   │   └── 9c4991ba39e93c3256772828b6536f20fa4be3
 │   │   ├─> a2
 │   │   │   └── 9958cc238080e6de30dece876c01f45de3c4d0
 │   │   ├─> a3
 │   │   │   └── 7c785bfeba4fbb93e6adeb6f9953c8bbb8483b
 │   │   ├─> a8
 │   │   │   └── cee98628470c3a9a93aae932cf5ec6dc2aa826
 │   │   ├─> b8
 │   │   │   └── dbe742caf4a1cbc674b8c8665707ac934680d5
 │   │   ├─> b9
 │   │   │   └── 1660dbf16a1ca644c6b01a5f916b6641d5d4f8
 │   │   ├─> c0
 │   │   │   └── aaaf95b08c84e2450c20d211fc0f293d730b15
 │   │   ├─> c1
 │   │   │   └── 3835ed149a132a92205464d09350ee81abed11
 │   │   ├─> c4
 │   │   │   └── 3f7c66634f804bc0211e7597f976601eb3aba0
 │   │   ├─> c6
 │   │   │   └── 00c964f511b96ced970e339337dbc1dd41f169
 │   │   ├─> c9
 │   │   │   ├── 6545e5694b44641302e637be86e3334d6b3e60
 │   │   │   └── 8358eeabde9e2d9300e164db6700bbb4341594
 │   │   ├─> ca
 │   │   │   └── e2f51d6767f42a6f5f6df30ecf70eafaa7b08d
 │   │   ├─> d0
 │   │   │   └── 37c8dfa12ea45adc599d67249dd5782fcdec96
 │   │   ├─> d1
 │   │   │   └── 7db982ff2962327c510d05c7caa6b99b1a9950
 │   │   ├─> d4
 │   │   │   └── 9db9b955d1f8bb5d181eb42b9b907a1996f9c2
 │   │   ├─> db
 │   │   │   └── a998d5859b313f877a65584616cf19209fce6c
 │   │   ├─> df
 │   │   │   ├── 310b5b98a58b4c56e74ee80cd5b768345f3d81
 │   │   │   └── 758a61eeebf1d7842f6d19f2bd90f1074751d5
 │   │   ├─> e1
 │   │   │   └── df28cea74cd6b5f3498e941c6d0627063694be
 │   │   ├─> e4
 │   │   │   └── 2f2f022922f9b6eda946894ae3e629f618e4dd
 │   │   ├─> e5
 │   │   │   └── d8fb6cc3fe64369592cc8fd4b7cd8f9a495299
 │   │   ├─> e7
 │   │   │   └── 4bdd891d4aabe16682ff3cac65945356c9fa77
 │   │   ├─> e9
 │   │   │   └── 8e5d3d4298aed2b07fbed2aae7631a222d2082
 │   │   ├─> ed
 │   │   │   └── 2002457c6b956c35144c008e44fe9d2669a7e2
 │   │   ├─> f0
 │   │   │   └── 55e243384ddb594cc39cc5d386574407a96fc3
 │   │   ├─> f1
 │   │   │   └── d6b91d95e50aef1c9bb811a826fecccd2db051
 │   │   ├─> f2
 │   │   │   └── a25fdb68be4dcbe2251b5eabfe2ce0a573a271
 │   │   ├─> f3
 │   │   │   └── 3d2650a13a2548442d6041b689951669f07328
 │   │   ├─> f4
 │   │   │   └── ca599b263b91b8001a27a9a0c7529c5806357e
 │   │   ├─> f5
 │   │   │   └── 1f68151052cd8f4fa8dd0d6b2e0474e52d88a6
 │   │   ├─> f9
 │   │   │   └── dd3a9a509fc82da02e6e2ca416d9fb7094e587
 │   │   ├─> fa
 │   │   │   └── 8c233bce61d80b41c698ac65d50641ccdd17c8
 │   │   ├─> fc
 │   │   │   ├── 052be67531f2be856a6c97f8e33c88ef72f781
 │   │   │   └── 418d8eea8711dc5c2abb1f83dfc9ba7c01eb6b
 │   │   ├─> info
 │   │   └─> pack
 │   ├─> refs
 │   │   ├─> heads
 │   │   │   └── main
 │   │   ├─> remotes
 │   │   │   └─> origin
 │   │   │       └── main
 │   │   └─> tags
 │   └── shallow
 ├─> .github
 │   └─> workflows
 │       ├── build.yml
 │       ├── dree.yml
 │       ├── lint.yml
 │       └── test.yml
 ├── .gitignore
 ├── .prettierrc.cjs
 ├── LICENSE
 ├── README.md
 ├── babel.config.cjs
 ├── build.mjs
 ├─> docs
 │   ├── .gitignore
 │   ├─> assets
 │   │   ├── br_and_hr.png
 │   │   ├── simple.png
 │   │   ├── with_options.png
 │   │   └── with_scope.png
 │   └─> tree
 │       └── dree.config.json
 ├── jest.config.ts
 ├── package-lock.json
 ├── package.json
 ├─> source
 │   ├── index.ts
 │   ├── tsconfig.json
 │   ├─> types
 │   │   ├─> deep-partial
 │   │   │   └── index.ts
 │   │   ├── index.ts
 │   │   ├─> options
 │   │   │   └── index.ts
 │   │   └─> palette
 │   │       └── index.ts
 │   └─> utils
 │       ├── colour.ts
 │       ├── logger.ts
 │       └── options.ts
 ├─> test
 │   ├── .eslintrc.cjs
 │   ├─> suites
 │   │   ├─> colour
 │   │   │   └── colour.test.ts
 │   │   ├─> handleOptions
 │   │   │   └── handleOptions.test.ts
 │   │   └─> logger
 │   │       ├─> constructor
 │   │       │   └── constructor.test.ts
 │   │       ├─> defaultInstance
 │   │       │   └── defaultInstance.test.ts
 │   │       ├─> logs
 │   │       │   ├─> noDebug
 │   │       │   │   ├─> debug
 │   │       │   │   │   └── debug.test.ts
 │   │       │   │   ├─> error
 │   │       │   │   │   └── error.test.ts
 │   │       │   │   ├─> info
 │   │       │   │   │   └── info.test.ts
 │   │       │   │   ├─> success
 │   │       │   │   │   └── success.test.ts
 │   │       │   │   └─> warning
 │   │       │   │       └── warning.test.ts
 │   │       │   ├─> scoped
 │   │       │   │   ├─> debug
 │   │       │   │   │   └── debug.test.ts
 │   │       │   │   ├─> error
 │   │       │   │   │   └── error.test.ts
 │   │       │   │   ├─> info
 │   │       │   │   │   └── info.test.ts
 │   │       │   │   ├─> success
 │   │       │   │   │   └── success.test.ts
 │   │       │   │   └─> warning
 │   │       │   │       └── warning.test.ts
 │   │       │   ├─> simple
 │   │       │   │   ├─> debug
 │   │       │   │   │   └── debug.test.ts
 │   │       │   │   ├─> error
 │   │       │   │   │   └── error.test.ts
 │   │       │   │   ├─> info
 │   │       │   │   │   └── info.test.ts
 │   │       │   │   ├─> success
 │   │       │   │   │   └── success.test.ts
 │   │       │   │   └─> warning
 │   │       │   │       └── warning.test.ts
 │   │       │   └─> specials
 │   │       │       └── specials.test.ts
 │   │       └─> setOptions
 │   │           └── setOptions.test.ts
 │   └─> utils
 │       └── getDefaultOptions.ts
 ├── tsconfig.json
 ├── typedoc.cjs
 └── typedoc.dev.cjs
```
[//]: # (dree - END)

## Development

To build the module make sure you have the dev dependencies installed.

The project is written in `Typescript`, bundled with `EsBuild` and linted with `ESLint`.

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
$ npm run transpile:all
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

in order to run the tests with `jest`.

If a coverage report is to be generated, run:

```bash
$ npm run cover:generate
```

### Bundle

The bundler bundles both a `commonjs` and an `esm` version of the module. Also a `dts` file is generated, via `dts-bundle-generator`.

```bash
$ npm run bundle
```

The `source` folder will be compiled in the `bundled` folder. It will contain the bundled `index.js`, `index.esm.js` and `index.d.ts` files.

Note: since `chalk` is only an esm, for the commonjs version it is bundled within the module itself.