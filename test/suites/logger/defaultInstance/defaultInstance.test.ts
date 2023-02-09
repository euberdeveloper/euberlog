import logger from '@src/index.js';
import { Logger } from '@src/utils/logger.js';

describe('Test Logger class constructor', function () {
    it('Should crate an instance of the Logger class without options', function () {
        expect(logger).toBeInstanceOf(Logger);
    });
});
