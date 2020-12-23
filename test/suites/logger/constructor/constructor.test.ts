import { expect } from 'chai';

import { Logger } from '@/utils/logger';

export default function testConstructor(): void {
    describe('Test Logger class constructor', function () {
        it('Should crate an instance of the Logger class without options', function () {
            const logger = new Logger();
            expect(logger).to.be.instanceOf(Logger);
        });

        it('Should crate an instance of the Logger class with a scope', function () {
            const logger = new Logger('scope');
            expect(logger).to.be.instanceOf(Logger);
        });

        it('Should crate an instance of the Logger class with empty options', function () {
            const logger = new Logger({});
            expect(logger).to.be.instanceOf(Logger);
        });

        it('Should crate an instance of the Logger class with options', function () {
            const logger = new Logger({
                debug: false,
                palette: { primary: { info: 'yellow' } }
            });
            expect(logger).to.be.instanceOf(Logger);
        });
    });
}
