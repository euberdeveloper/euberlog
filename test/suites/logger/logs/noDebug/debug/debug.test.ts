import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@src/utils/logger';

export default function testDebug(): void {
    describe('Test debug method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleDebug: SinonStub;

        beforeEach(function () {
            logger = new Logger({ scope: 'SCOPE', debug: false });
            sandbox = createSandbox();
            stubConsoleDebug = sandbox.stub(console, 'debug');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print a debug log text "Debug"', function () {
            logger.debug('Debug');
            expect(stubConsoleDebug).to.have.not.been.called;
        });

        it('Should print a debug log text "Debuggen"', function () {
            logger.debug('Debuggen');
            expect(stubConsoleDebug).to.have.not.been.called;
        });

        it('Should print a debug log text "Debug" with an object { n: 1 }', function () {
            logger.debug('Debug', { n: 1 });
            expect(stubConsoleDebug).to.have.not.been.called;
        });
    });
}
