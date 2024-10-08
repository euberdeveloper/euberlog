import { Logger } from '@src/utils/logger.js';

import { MockInstance } from 'vitest';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('info');

describe('Test info method', function () {
    let logger: Logger;
    let spyConsoleLog: MockInstance<(message?: any, ...optionalParams: any[]) => void>;

    beforeAll(function () {
        spyConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleLog.mockClear();
    });

    it('Should print an info log text "Informazione"', function () {
        logger.info('Informazione');
        const expected = COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Informazione');
        expect(spyConsoleLog).toHaveBeenCalledWith(expected);
    });

    it('Should print an info log text "Auskunft"', function () {
        logger.info('Auskunft');
        const expected = COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Auskunft');
        expect(spyConsoleLog).toHaveBeenCalledWith(expected);
    });

    it('Should print an info log text "Informazione" with an object { n: 1 }', function () {
        logger.info('Informazione', { n: 1 });
        const expected = [
            COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Informazione'),
            { n: 1 }
        ];
        expect(spyConsoleLog).toHaveBeenCalledWith(...expected);
    });

    afterAll(function () {
        spyConsoleLog.mockRestore();
    });
});
