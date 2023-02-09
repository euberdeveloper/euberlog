import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';

import { Logger } from '@src/utils/logger.js';

import { getDefaultColors } from '@test/utils/getDefaultOptions.js';
const { COLOUR_PRIMARY, COLOUR_SECONDARY } = getDefaultColors('info');

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
                COLOUR_PRIMARY.bold('[INFO]') + COLOUR_SECONDARY(' Informazione')
            );
            expect(stubConsoleLog).to.have.been.calledWith(
                COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {FIRST}') + COLOUR_SECONDARY(' Informazione')
            );
            expect(stubConsoleLog).to.have.been.calledWith(
                COLOUR_PRIMARY.bold('[INFO]') + COLOUR_PRIMARY(' {SECOND}') + COLOUR_SECONDARY(' Informazione')
            );
            expect(stubConsoleLog).to.have.been.calledWith(
                COLOUR_PRIMARY.bold('[INFO]') + COLOUR_SECONDARY(' Altra informazione')
            );
        });
    });
}
