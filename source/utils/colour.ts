import * as chalk from 'chalk';

const COLOURS = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'gray',
    'grey',
    'blackBright',
    'redBright',
    'greenBright',
    'yellowBright',
    'blueBright',
    'magentaBright',
    'cyanBright',
    'whiteBright'
];

export function colour(colour: string): chalk.Chalk {
    if (/^#([a-f0-9]{3}){1,2}$/i.test(colour)) {
        return chalk.hex(colour);
    }

    const regexpResult = /^\((?<red>\d{1,3}),(?<green>\d{1,3}),(?<blue>\d{1,3})\)$/.exec(colour)?.groups;
    if (regexpResult) {
        const { red, green, blue } = regexpResult;
        return chalk.rgb(+red, +green, +blue);
    }

    if (COLOURS.includes(colour)) {
        return chalk[colour];
    }

    return chalk.keyword(colour);
}
