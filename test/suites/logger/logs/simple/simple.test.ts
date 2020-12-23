import testInfo from './info/info.test';
import testSuccess from './success/success.test';
import testDebug from './debug/debug.test';
import testWarning from './warning/warning.test';
import testError from './error/error.test';

export default function testSimpleLogs(): void {
    describe('Test Logger class log methods without options', function () {
        testInfo();
        testSuccess();
        testDebug();
        testWarning();
        testError();
    });
}
