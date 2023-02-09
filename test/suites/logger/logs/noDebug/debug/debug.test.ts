import { Logger } from '@src/utils/logger.js';

describe('Test debug method', function () {
    let logger: Logger;
    let spyConsoleDebug: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

    beforeAll(function () {
        spyConsoleDebug = jest.spyOn(console, 'debug').mockImplementation(() => { });
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleDebug.mockClear();
    });

    it('Should print a debug log text "Debug"', function () {
        logger.debug('Debug');
        expect(spyConsoleDebug).toHaveBeenCalled();
    });

    it('Should print a debug log text "Debuggen"', function () {
        logger.debug('Debuggen');
        expect(spyConsoleDebug).toHaveBeenCalled();
    });

    it('Should print a debug log text "Debug" with an object { n: 1 }', function () {
        logger.debug('Debug', { n: 1 });
        expect(spyConsoleDebug).toHaveBeenCalled();
    });

    afterAll(function () {
        spyConsoleDebug.mockRestore();
    });
});
