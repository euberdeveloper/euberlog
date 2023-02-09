import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('error');

describe('Test error method', function () {
    let logger: Logger;
    let spyConsoleError: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

    beforeAll(function () {
        spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleError.mockClear();
    });
    
    it('Should print an error log text "Errore"', function () {
        logger.error('Errore');
        const expected = COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Errore');
        expect(spyConsoleError).toHaveBeenCalledWith(expected);
    });

    it('Should print an error log text "Fehler"', function () {
        logger.error('Fehler');
        const expected = COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Fehler');
        expect(spyConsoleError).toHaveBeenCalledWith(expected);
    });

    it('Should print an error log text "Errore" with an object { n: 1 }', function () {
        logger.error('Errore', { n: 1 });
        const expected = [
            COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Errore'),
            { n: 1 }
        ];
        expect(spyConsoleError).toHaveBeenCalledWith(...expected);
    });

    afterAll(function () {
        spyConsoleError.mockRestore();
    });
});
