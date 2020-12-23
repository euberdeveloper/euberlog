import { expect } from 'chai';

import { Logger } from '@/utils/logger';

export default function testLogger(): void {
    describe('Test @/utils/logger.ts', function () {
        it('Should create some instances of the Logger class', function () {
            const loggerSimple = new Logger();
            expect(loggerSimple instanceof Logger).to.be.true;

            const loggerScoped = new Logger('scope');
            expect(loggerScoped instanceof Logger).to.be.true;

            const loggerOptioned = new Logger({});
            expect(loggerOptioned instanceof Logger).to.be.true;
        });
    });
}
