import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('info');

describe('Test Logger class setOptions method', function () {
    let spyConsoleDebug: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>,
        spyConsoleLog: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

    beforeAll(function () {
        spyConsoleDebug = jest.spyOn(console, 'debug').mockImplementation(() => {});
        spyConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    beforeEach(function () {
        spyConsoleDebug.mockClear();
        spyConsoleLog.mockClear();
    });

    it('Should set the debug option from true to false and then to true again', function () {
        const logger = new Logger();
        logger.debug('debug');
        logger.setOptions({ debug: false });
        logger.debug('debug');
        logger.setOptions({ debug: true });
        logger.debug('debug');
        expect(spyConsoleDebug).toHaveBeenCalledTimes(2);
    });

    it('Should set the scope from null to "FIRST", then to "SECOND" and then to null again', function () {
        const logger = new Logger();
        logger.info('Informazione');

        logger.setOptions({ scope: 'FIRST' });
        logger.info('Informazione');

        logger.setOptions({ scope: 'SECOND' });
        logger.info('Informazione');

        logger.setOptions({ scope: null });
        logger.info('Altra informazione');

        expect(spyConsoleLog).toHaveBeenCalledWith(COLOUR_PRIMARY.bold('[INFO]') + COLOUR_SECONDARY(' Informazione'));
        expect(spyConsoleLog).toHaveBeenCalledWith(
            COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {FIRST}') + COLOUR_SECONDARY(' Informazione')
        );
        expect(spyConsoleLog).toHaveBeenCalledWith(
            COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SECOND}') + COLOUR_SECONDARY(' Informazione')
        );
        expect(spyConsoleLog).toHaveBeenCalledWith(
            COLOUR_PRIMARY.bold('[INFO]') + COLOUR_SECONDARY(' Altra informazione')
        );
    });

    afterAll(function () {
        spyConsoleDebug.mockRestore();
        spyConsoleLog.mockRestore();
    });
});
