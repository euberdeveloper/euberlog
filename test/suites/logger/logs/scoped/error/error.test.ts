import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

export default function testError(): void {
    describe('Test error method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleError: SinonStub;

        beforeEach(function () {
            logger = new Logger('SCOPE');
            sandbox = createSandbox();
            stubConsoleError = sandbox.stub(console, 'error');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print an error log text "Errore"', function () {
            logger.error('Errore');
            const expected =
                '\u001b[38;2;204;102;102m\u001b[31m\u001b[1m[ERROR]\u001b[22m\u001b[39m\u001b[38;2;204;102;102m\u001b[31m {SCOPE}\u001b[39m\u001b[38;2;204;102;102m Errore\u001b[39m';
            expect(stubConsoleError).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an error log text "Fehler"', function () {
            logger.error('Fehler');
            const expected =
                '\u001b[38;2;204;102;102m\u001b[31m\u001b[1m[ERROR]\u001b[22m\u001b[39m\u001b[38;2;204;102;102m\u001b[31m {SCOPE}\u001b[39m\u001b[38;2;204;102;102m Fehler\u001b[39m';
            expect(stubConsoleError).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an error log text "Errore" with an object { n: 1 }', function () {
            logger.error('Errore', { n: 1 });
            const expected = [
                '\u001b[38;2;204;102;102m\u001b[31m\u001b[1m[ERROR]\u001b[22m\u001b[39m\u001b[38;2;204;102;102m\u001b[31m {SCOPE}\u001b[39m\u001b[38;2;204;102;102m Errore\u001b[39m',
                { n: 1 }
            ];
            expect(stubConsoleError).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
