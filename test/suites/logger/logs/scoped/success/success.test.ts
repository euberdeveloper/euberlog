import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('success');

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
                COLOUR_PRIMARY.bold('[SUCCESS]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Successo');
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a success log text "Erfolg"', function () {
            logger.success('Erfolg');
            const expected =
                COLOUR_PRIMARY.bold('[SUCCESS]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Erfolg');
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a success log text "Successo" with an object { n: 1 }', function () {
            logger.success('Successo', { n: 1 });
            const expected = [
                COLOUR_PRIMARY.bold('[SUCCESS]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Successo'),
                { n: 1 }
            ];
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
