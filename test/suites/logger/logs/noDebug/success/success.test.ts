import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

export default function testSuccess(): void {
    describe('Test success method', function () {
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

        it('Should print a success log text "Successo"', function () {
            logger.success('Successo');
            const expected =
                '\u001b[38;2;181;189;104m\u001b[32m\u001b[1m[SUCCESS]\u001b[22m\u001b[39m\u001b[38;2;181;189;104m\u001b[32m {SCOPE}\u001b[39m\u001b[38;2;181;189;104m Successo\u001b[39m';
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a success log text "Erfolg"', function () {
            logger.success('Erfolg');
            const expected =
                '\u001b[38;2;181;189;104m\u001b[32m\u001b[1m[SUCCESS]\u001b[22m\u001b[39m\u001b[38;2;181;189;104m\u001b[32m {SCOPE}\u001b[39m\u001b[38;2;181;189;104m Erfolg\u001b[39m';
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a success log text "Successo" with an object { n: 1 }', function () {
            logger.success('Successo', { n: 1 });
            const expected = [
                '\u001b[38;2;181;189;104m\u001b[32m\u001b[1m[SUCCESS]\u001b[22m\u001b[39m\u001b[38;2;181;189;104m\u001b[32m {SCOPE}\u001b[39m\u001b[38;2;181;189;104m Successo\u001b[39m',
                { n: 1 }
            ];
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
