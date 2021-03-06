import { expect } from 'chai';
import { createSandbox, SinonStub, SinonSandbox, match } from 'sinon';

import { Logger } from '@/utils/logger';
import { getHrPattern } from '@test/utils/getDefaultOptions';

export default function testSpecials(): void {
    describe('Test Logger br and hr methods', function () {
        let sandbox: SinonSandbox, stubConsoleLog: SinonStub;

        beforeEach(function () {
            sandbox = createSandbox();
            stubConsoleLog = sandbox.stub(console, 'log');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Should print an empty line', function () {
            const logger = new Logger();
            logger.br();
            expect(stubConsoleLog).to.have.been.calledOnceWithExactly();
        });

        it('Should print three empty lines', function () {
            const logger = new Logger();
            logger.br(3);
            expect(stubConsoleLog).to.have.been.calledThrice;
            expect(stubConsoleLog).to.have.been.always.calledWithExactly();
        });

        it('Should print an empty line even if in debug mode', function () {
            const logger = new Logger({ debug: false });
            logger.br();
            expect(stubConsoleLog).to.have.been.calledOnce;
        });

        it('Should print a standard hr line', function () {
            const logger = new Logger();
            logger.hr();
            expect(stubConsoleLog).to.have.been.calledOnce;
            expect(stubConsoleLog).to.have.been.calledWithMatch(match(getHrPattern('white', '-')));
        });

        it('Should print three standard hr lines', function () {
            const logger = new Logger();
            logger.hr(3);
            expect(stubConsoleLog).to.have.been.calledThrice;
            expect(stubConsoleLog).to.have.been.always.calledWithMatch(match(getHrPattern('white', '-')));
        });

        it('Should print a yellow hr line', function () {
            const logger = new Logger();
            logger.hr(1, 'yellow');
            expect(stubConsoleLog).to.have.been.calledOnce;
            expect(stubConsoleLog).to.have.been.calledWithMatch(match(getHrPattern('yellow', '-')));
        });

        it('Should print an hr line of @', function () {
            const logger = new Logger();
            logger.hr(1, 'white', '@');
            expect(stubConsoleLog).to.have.been.calledOnce;
            expect(stubConsoleLog).to.have.been.calledWithMatch(match(getHrPattern('white', '@')));
        });

        it('Should print a standard hr line with the default 50 characters', function () {
            const logger = new Logger();

            const backup = process.stdout.columns;
            process.stdout.columns = undefined as any;
            logger.hr();
            process.stdout.columns = backup;

            expect(stubConsoleLog).to.have.been.calledOnce;
            expect(stubConsoleLog).to.have.been.calledWithMatch(match(getHrPattern('white', '-', 50)));
        });
    });
}
