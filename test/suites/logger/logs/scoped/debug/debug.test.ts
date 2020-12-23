import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@/utils/logger';

import { getDefaultColors } from '@test/utils/getDefaultOptions';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('debug');

export default function testDebug(): void {
    describe('Test debug method', function () {
        let logger: Logger;
        let sandbox: SinonSandbox, stubConsoleDebug: SinonStub;

        beforeEach(function () {
            logger = new Logger('SCOPE');
            sandbox = createSandbox();
            stubConsoleDebug = sandbox.stub(console, 'debug');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print a debug log text "Debug"', function () {
            logger.debug('Debug');
            const expected = COLOUR_PRIMARY.bold('[DEBUG]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Debug');
            expect(stubConsoleDebug).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a debug log text "Debuggen"', function () {
            logger.debug('Debuggen');
            const expected =
                COLOUR_PRIMARY.bold('[DEBUG]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Debuggen');
            expect(stubConsoleDebug).to.have.been.calledOnceWithExactly(expected);
        });

        it('Should print a debug log text "Debug" with an object { n: 1 }', function () {
            logger.debug('Debug', { n: 1 });
            const expected = [
                COLOUR_PRIMARY.bold('[DEBUG]') + COLOUR_PRIMARY(' {SCOPE}') + COLOUR_SECONDARY(' Debug'),
                { n: 1 }
            ];
            expect(stubConsoleDebug).to.have.been.calledOnceWithExactly(...expected);
        });
    });
}
