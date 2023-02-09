import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('error');

export default function testError(): void {
    describe('Test error method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleError: SinonStub;

        beforeEach(function () {
            logger = new Logger();
            sandbox = createSandbox();
            stubConsoleError = sandbox.stub(console, 'error');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print an error log text "Errore"', function () {
            logger.error('Errore');
            const expected = COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_SECONDARY(' Errore');
            expect(stubConsoleError).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an error log text "Fehler"', function () {
            logger.error('Fehler');
            const expected = COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_SECONDARY(' Fehler');
            expect(stubConsoleError).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an error log text "Errore" with an object { n: 1 }', function () {
            logger.error('Errore', { n: 1 });
            const expected = [COLOUR_PRIMARY.bold('[ERROR]') + COLOUR_SECONDARY(' Errore'), { n: 1 }];
            expect(stubConsoleError).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
