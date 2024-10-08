import { Logger } from '@src/utils/logger.js';

import { MockInstance } from 'vitest';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('error');

describe('Test error method', function () {
    let logger: Logger;
    let spyConsoleError: MockInstance<(message?: any, ...optionalParams: any[]) => void>;

    beforeAll(function () {
        spyConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    beforeEach(function () {
        logger = new Logger();
        spyConsoleError.mockClear();
    });

    it('Should print an error log text "Errore"', function () {
        logger.error('Errore');
        const expected = COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_SECONDARY(' Errore');
        expect(spyConsoleError).toHaveBeenCalledWith(expected);
    });

    it('Should print an error log text "Fehler"', function () {
        logger.error('Fehler');
        const expected = COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_SECONDARY(' Fehler');
        expect(spyConsoleError).toHaveBeenCalledWith(expected);
    });

    it('Should print an error log text "Errore" with an object { n: 1 }', function () {
        logger.error('Errore', { n: 1 });
        const expected = [COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_SECONDARY(' Errore'), { n: 1 }];
        expect(spyConsoleError).toHaveBeenCalledWith(...expected);
    });

    afterAll(function () {
        spyConsoleError.mockRestore();
    });
});
