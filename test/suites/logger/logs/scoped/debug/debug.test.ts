import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('debug');

describe('Test debug method', function () {
    let logger: Logger;
    let spyConsoleDebug: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

    beforeAll(function () {
        spyConsoleDebug = jest.spyOn(console, 'debug').mockImplementation(() => {});
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleDebug.mockClear();
    });

    it('Should print a debug log text "Debug"', function () {
        logger.debug('Debug');
        const expected = COLOUR_PRIMARY.bold('[DEBUG]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Debug');
        expect(spyConsoleDebug).toHaveBeenCalledWith(expected);
    });

    it('Should print a debug log text "Debuggen"', function () {
        logger.debug('Debuggen');
        const expected = COLOUR_PRIMARY.bold('[DEBUG]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Debuggen');
        expect(spyConsoleDebug).toHaveBeenCalledWith(expected);
    });

    it('Should print a debug log text "Debug" with an object { n: 1 }', function () {
        logger.debug('Debug', { n: 1 });
        const expected = [
            COLOUR_PRIMARY.bold('[DEBUG]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Debug'),
            { n: 1 }
        ];
        expect(spyConsoleDebug).toHaveBeenCalledWith(...expected);
    });

    afterAll(function () {
        spyConsoleDebug.mockRestore();
    });
});
