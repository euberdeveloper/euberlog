import { Logger } from '@src/utils/logger.js';

import { MockInstance } from 'vitest';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('success');

describe('Test success method', function () {
    let logger: Logger;
    let spyConsoleLog: MockInstance<(message?: any, ...optionalParams: any[]) => void>;

    beforeAll(function () {
        spyConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleLog.mockClear();
    });

    it('Should print a success log text "Successo"', function () {
        logger.success('Successo');
        const expected = COLOUR_PRIMARY.bold('[SUCCESS]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Successo');
        expect(spyConsoleLog).toHaveBeenCalledWith(expected);
    });

    it('Should print a success log text "Erfolg"', function () {
        logger.success('Erfolg');
        const expected = COLOUR_PRIMARY.bold('[SUCCESS]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Erfolg');
        expect(spyConsoleLog).toHaveBeenCalledWith(expected);
    });

    it('Should print a success log text "Successo" with an object { n: 1 }', function () {
        logger.success('Successo', { n: 1 });
        const expected = [
            COLOUR_PRIMARY.bold('[SUCCESS]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Successo'),
            { n: 1 }
        ];
        expect(spyConsoleLog).toHaveBeenCalledWith(...expected);
    });

    afterAll(function () {
        spyConsoleLog.mockRestore();
    });
});
