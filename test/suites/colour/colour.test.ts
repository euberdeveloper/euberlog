import chalk from 'chalk';

import { colour } from '@src/utils/colour.js';

describe('Test @/utils/colour', function () {
    it('Should return the right chalk function for `yellow`', function () {
        const expected = chalk.yellow;
        const result = colour('yellow');

        expect(result).toEqual(expected);
        expect(typeof result).toEqual('function');
    });

    it('Should return all the chalk built-in colour functions', function () {
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

        for (const c of COLOURS) {
            const expected = chalk[c];
            const result = colour(c);

            expect(result).toEqual(expected);
            expect(typeof result).toEqual('function');
        }
    });

    it('Should return the chalk colour function for "#FAFAFA"', function () {
        const expected = chalk.hex('#FAFAFA');
        const result = colour('#FAFAFA');

        expect(result.toString()).toEqual(expected.toString());
        expect(typeof result).toEqual('function');
    });

    it('Should return the chalk colour function for "#ABABAB"', function () {
        const expected = chalk.hex('#ABABAB');
        const result = colour('#ABABAB');

        expect(result.toString()).toEqual(expected.toString());
        expect(typeof result).toEqual('function');
    });

    it('Should return the chalk colour function for "#cccccc"', function () {
        const expected = chalk.hex('#cccccc');
        const result = colour('#cccccc');

        expect(result.toString()).toEqual(expected.toString());
        expect(typeof result).toEqual('function');
    });

    it('Should return the chalk colour function for "#eFeFEf"', function () {
        const expected = chalk.hex('#eFeFEf');
        const result = colour('#eFeFEf');

        expect(result.toString()).toEqual(expected.toString());
        expect(typeof result).toEqual('function');
    });

    it('Should return the chalk colour function for "rgb(255, 255, 255)"', function () {
        const expected = chalk.rgb(255, 255, 255);
        const result = colour('(255,255,255)');

        expect(result.toString()).toEqual(expected.toString());
        expect(typeof result).toEqual('function');
    });

    it('Should return the right chalk function for the css keyword `orange`', function () {
        const expected = chalk.keyword('orange');
        const result = colour('orange');

        expect(result.toString()).toEqual(expected.toString());
        expect(typeof result).toEqual('function');
    });
});
