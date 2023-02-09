import { Logger } from '@src/utils/logger.js';
import { getHrPattern } from '@test/utils/getDefaultOptions.js';

describe('Test Logger br and hr methods', function () {
    let spyConsoleLog: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

    beforeAll(function () {
        spyConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    beforeEach(function () {
        spyConsoleLog.mockClear();
    });

    it('Should print an empty line', function () {
        const logger = new Logger();
        logger.br();
        expect(spyConsoleLog).toHaveBeenCalledWith();
    });

    it('Should print three empty lines', function () {
        const logger = new Logger();
        logger.br(3);
        expect(spyConsoleLog).toHaveBeenCalledTimes(3);
        expect(spyConsoleLog).toHaveBeenCalledWith();
    });

    it('Should print an empty line even if in debug mode', function () {
        const logger = new Logger({ debug: false });
        logger.br();
        expect(spyConsoleLog).toHaveBeenCalledTimes(1);
    });

    it('Should print a standard hr line', function () {
        const logger = new Logger();
        logger.hr();
        expect(spyConsoleLog).toHaveBeenCalledTimes(1);
        expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(getHrPattern('white', '-')));
    });

    it('Should print three standard hr lines', function () {
        const logger = new Logger();
        logger.hr(3);
        expect(spyConsoleLog).toHaveBeenCalledTimes(3);
        expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(getHrPattern('white', '-')));
    });

    it('Should print a yellow hr line', function () {
        const logger = new Logger();
        logger.hr(1, 'yellow');
        expect(spyConsoleLog).toHaveBeenCalledTimes(1);
        expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(getHrPattern('yellow', '-')));
    });

    it('Should print an hr line of @', function () {
        const logger = new Logger();
        logger.hr(1, 'white', '@');
        expect(spyConsoleLog).toHaveBeenCalledTimes(1);
        expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(getHrPattern('white', '@')));
    });

    it('Should print a standard hr line with the default 50 characters', function () {
        const logger = new Logger();

        const backup = process.stdout.columns;
        process.stdout.columns = undefined as any;
        logger.hr();
        process.stdout.columns = backup;

        expect(spyConsoleLog).toHaveBeenCalledTimes(1);
        expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(getHrPattern('white', '-', 50)));
    });

    afterEach(function () {
        spyConsoleLog.mockClear();
    });
});
