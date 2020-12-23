import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

export default function testDebug(): void {
    describe('Test debug method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleDebug: SinonStub;

        beforeEach(function () {
            logger = new Logger();
            sandbox = createSandbox();
            stubConsoleDebug = sandbox.stub(console, 'debug');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print a debug log text "Debug"', function () {
            logger.debug('Debug');
            const expected =
                '\u001b[38;2;197;200;198m\u001b[90m[DEBUG]\u001b[39m\u001b[38;2;197;200;198m Debug\u001b[39m';
            expect(stubConsoleDebug).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a debug log text "Debuggen"', function () {
            logger.debug('Debuggen');
            const expected =
                '\u001b[38;2;197;200;198m\u001b[90m[DEBUG]\u001b[39m\u001b[38;2;197;200;198m Debuggen\u001b[39m';
            expect(stubConsoleDebug).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a debug log text "Debug" with an object { n: 1 }', function () {
            logger.debug('Debug', { n: 1 });
            const expected = [
                '\u001b[38;2;197;200;198m\u001b[90m[DEBUG]\u001b[39m\u001b[38;2;197;200;198m Debug\u001b[39m',
                { n: 1 }
            ];
            expect(stubConsoleDebug).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
