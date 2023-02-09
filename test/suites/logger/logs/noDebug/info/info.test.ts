import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('info');

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
                COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Informazione');
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an info log text "Auskunft"', function () {
            logger.info('Auskunft');
            const expected = COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Auskunft');
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print an info log text "Informazione" with an object { n: 1 }', function () {
            logger.info('Informazione', { n: 1 });
            const expected = [
                COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Informazione'),
                { n: 1 }
            ];
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
