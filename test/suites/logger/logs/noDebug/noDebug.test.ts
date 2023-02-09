import testInfo from './info/info.test.js';
import testSuccess from './success/success.test.js';
import testDebug from './debug/debug.test.js';
import testWarning from './warning/warning.test.js';
import testError from './error/error.test.js';

export default function testNoDebugLogs(): void {
    describe('Test Logger class log methods with debug option set to false', function () {
        testInfo();
        testSuccess();
        testDebug();
        testWarning();
        testError();
    });
}
