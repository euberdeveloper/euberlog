import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

export default function testInfo(): void {
    describe('Test info method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleLog: SinonStub;

        beforeEach(function () {
            logger = new Logger({ scope: 'SCOPE', debug: false });
            sandbox = createSandbox();
            stubConsoleLog = sandbox.stub(console, 'log');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print an info log text "Informazione"', function () {
            logger.info('Informazione');
            const expected =
                '\u001b[38;2;129;162;190m\u001b[34m\u001b[1m[INFO]\u001b[22m\u001b[39m\u001b[38;2;129;162;190m\u001b[34m {SCOPE}\u001b[39m\u001b[38;2;129;162;190m Informazione\u001b[39m';
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an info log text "Auskunft"', function () {
            logger.info('Auskunft');
            const expected =
                '\u001b[38;2;129;162;190m\u001b[34m\u001b[1m[INFO]\u001b[22m\u001b[39m\u001b[38;2;129;162;190m\u001b[34m {SCOPE}\u001b[39m\u001b[38;2;129;162;190m Auskunft\u001b[39m';
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an info log text "Informazione" with an object { n: 1 }', function () {
            logger.info('Informazione', { n: 1 });
            const expected = [
                '\u001b[38;2;129;162;190m\u001b[34m\u001b[1m[INFO]\u001b[22m\u001b[39m\u001b[38;2;129;162;190m\u001b[34m {SCOPE}\u001b[39m\u001b[38;2;129;162;190m Informazione\u001b[39m',
                { n: 1 }
            ];
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
