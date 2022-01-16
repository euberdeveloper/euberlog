import { expect } from 'chai';

import logger from '@src';
import { Logger } from '@src/utils/logger';

export default function testConstructor(): void {
    describe('Test Logger class constructor', function () {
        it('Should crate an instance of the Logger class without options', function () {
            expect(logger).to.be.instanceOf(Logger);
        });
    });
}
