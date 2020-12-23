import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

export default function testWarning(): void {
    describe('Test warning method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleWarn: SinonStub;

        beforeEach(function () {
            logger = new Logger('SCOPE');
            sandbox = createSandbox();
            stubConsoleWarn = sandbox.stub(console, 'warn');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print a warning log text "Avvertimento"', function () {
            logger.warning('Avvertimento');
            const expected =
                '\u001b[38;2;240;198;116m\u001b[33m\u001b[1m[WARNING]\u001b[22m\u001b[39m\u001b[38;2;240;198;116m\u001b[33m {SCOPE}\u001b[39m\u001b[38;2;240;198;116m Avvertimento\u001b[39m';
            expect(stubConsoleWarn).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a warning log text "Achtung"', function () {
            logger.warning('Achtung');
            const expected =
                '\u001b[38;2;240;198;116m\u001b[33m\u001b[1m[WARNING]\u001b[22m\u001b[39m\u001b[38;2;240;198;116m\u001b[33m {SCOPE}\u001b[39m\u001b[38;2;240;198;116m Achtung\u001b[39m';
            expect(stubConsoleWarn).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a warning log text "Avvertimento" with an object { n: 1 }', function () {
            logger.warning('Avvertimento', { n: 1 });
            const expected = [
                '\u001b[38;2;240;198;116m\u001b[33m\u001b[1m[WARNING]\u001b[22m\u001b[39m\u001b[38;2;240;198;116m\u001b[33m {SCOPE}\u001b[39m\u001b[38;2;240;198;116m Avvertimento\u001b[39m',
                { n: 1 }
            ];
            expect(stubConsoleWarn).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
