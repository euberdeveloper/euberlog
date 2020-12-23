import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { getDefaultColors } from '@test/utils/getDefaultOptions';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('warning');

import { Logger } from '@/utils/logger';

export default function testWarning(): void {
    describe('Test warning method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleWarn: SinonStub;

        beforeEach(function () {
            logger = new Logger({ scope: 'SCOPE', debug: false });
            sandbox = createSandbox();
            stubConsoleWarn = sandbox.stub(console, 'warn');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print a warning log text "Avvertimento"', function () {
            logger.warning('Avvertimento');
            const expected =
                COLOUR_PRIMARY.bold('[WARNING]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Avvertimento');
            expect(stubConsoleWarn).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a warning log text "Achtung"', function () {
            logger.warning('Achtung');
            const expected =
                COLOUR_PRIMARY.bold('[WARNING]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Achtung');
            expect(stubConsoleWarn).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a warning log text "Avvertimento" with an object { n: 1 }', function () {
            logger.warning('Avvertimento', { n: 1 });
            const expected = [
                COLOUR_PRIMARY.bold('[WARNING]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Avvertimento'),
                { n: 1 }
            ];
            expect(stubConsoleWarn).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
