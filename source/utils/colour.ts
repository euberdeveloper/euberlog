import * as chalk from 'chalk';

/**
 * The colours that are direct functions of chalk (chalk.[colour]() is a valid function).
 */
const COLOURS = new Set([
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
]);

/**
 * Given a colour, returns the corrisponding chalk function.
 * @param colour The colour as a direct colour (such as 'black'), an hex colour (such as '#fafafa'), an RGB colour (such as '(255,255,255)') or a css colour (such as 'orange').
 */
export function colour(colour: string): chalk.Chalk {
    if (/^#([\da-f]{3}){1,2}$/i.test(colour)) {
        return chalk.hex(colour);
    }

    const regexpResult = /^\((?<red>\d{1,3}),(?<green>\d{1,3}),(?<blue>\d{1,3})\)$/.exec(colour)?.groups;
    if (regexpResult) {
        const { red, green, blue } = regexpResult;
        return chalk.rgb(+red, +green, +blue);
    }

    if (COLOURS.has(colour)) {
        return chalk[colour];
    }

    return chalk.keyword(colour);
}
