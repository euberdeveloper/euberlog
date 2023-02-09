import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('warning');

describe('Test warning method', function () {
    let logger: Logger;
    let spyConsoleWarn: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

    beforeAll(function () {
        spyConsoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleWarn.mockClear();
    });

    it('Should print a warning log text "Avvertimento"', function () {
        logger.warning('Avvertimento');
        const expected =
            COLOUR_PRIMARY.bold('[WARNING]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Avvertimento');
        expect(spyConsoleWarn).toHaveBeenCalledWith(expected);
    });

    it('Should print a warning log text "Achtung"', function () {
        logger.warning('Achtung');
        const expected = COLOUR_PRIMARY.bold('[WARNING]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Achtung');
        expect(spyConsoleWarn).toHaveBeenCalledWith(expected);
    });

    it('Should print a warning log text "Avvertimento" with an object { n: 1 }', function () {
        logger.warning('Avvertimento', { n: 1 });
        const expected = [
            COLOUR_PRIMARY.bold('[WARNING]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Avvertimento'),
            { n: 1 }
        ];
        expect(spyConsoleWarn).toHaveBeenCalledWith(...expected);
    });

    afterAll(function () {
        spyConsoleWarn.mockRestore();
    });
});
