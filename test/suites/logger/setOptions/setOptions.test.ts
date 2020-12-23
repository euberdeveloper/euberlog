import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

export default function testConstructor(): void {
    describe('Test Logger class setOptions method', function () {
        let sandbox: SinonSandbox, stubConsoleDebug: SinonStub, stubConsoleLog: SinonStub;

        beforeEach(function () {
            sandbox = createSandbox();
            stubConsoleDebug = sandbox.stub(console, 'debug');
            stubConsoleLog = sandbox.stub(console, 'log');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should set the debug option from true to false and then to true again', function () {
            const logger = new Logger();
            logger.debug('debug');
            logger.setOptions({ debug: false });
            logger.debug('debug');
            logger.setOptions({ debug: true });
            logger.debug('debug');
            expect(stubConsoleDebug).to.have.been.calledTwice;
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

            expect(stubConsoleLog).to.have.been.calledWith(
                '\x1B[38;2;129;162;190m\x1B[34m\x1B[1m[INFO]\x1B[22m\x1B[39m\x1B[38;2;129;162;190m Informazione\x1B[39m'
            );
            expect(stubConsoleLog).to.have.been.calledWith(
                '\x1B[38;2;129;162;190m\x1B[34m\x1B[1m[INFO]\x1B[22m\x1B[39m\x1B[38;2;129;162;190m\x1B[34m {FIRST}\x1B[39m\x1B[38;2;129;162;190m Informazione\x1B[39m'
            );
            expect(stubConsoleLog).to.have.been.calledWith(
                '\x1B[38;2;129;162;190m\x1B[34m\x1B[1m[INFO]\x1B[22m\x1B[39m\x1B[38;2;129;162;190m\x1B[34m {SECOND}\x1B[39m\x1B[38;2;129;162;190m Informazione\x1B[39m'
            );
            expect(stubConsoleLog).to.have.been.calledWith(
                '\x1B[38;2;129;162;190m\x1B[34m\x1B[1m[INFO]\x1B[22m\x1B[39m\x1B[38;2;129;162;190m\x1B[34m {SECOND}\x1B[39m\x1B[38;2;129;162;190m Altra informazione\x1B[39m'
            );
        });
    });
}
