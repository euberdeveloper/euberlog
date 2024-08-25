import { Logger } from '@src/utils/logger.js';
import { MockInstance } from 'vitest';

describe('Test debug method', function () {
    let logger: Logger;
    let spyConsoleDebug: MockInstance<(message?: any, ...optionalParams: any[]) => void>;

    beforeAll(function () {
        spyConsoleDebug = vi.spyOn(console, 'debug').mockImplementation(() => {});
    });

    beforeEach(function () {
        logger = new Logger({ scope: 'SCOPE', debug: false });
        spyConsoleDebug.mockClear();
    });

    it('Should print a debug log text "Debug"', function () {
        logger.debug('Debug');
        expect(spyConsoleDebug).not.toHaveBeenCalled();
    });

    it('Should print a debug log text "Debuggen"', function () {
        logger.debug('Debuggen');
        expect(spyConsoleDebug).not.toHaveBeenCalled();
    });

    it('Should print a debug log text "Debug" with an object { n: 1 }', function () {
        logger.debug('Debug', { n: 1 });
        expect(spyConsoleDebug).not.toHaveBeenCalled();
    });

    afterAll(function () {
        spyConsoleDebug.mockRestore();
    });
});
