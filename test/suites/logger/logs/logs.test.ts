import testSpecials from './specials/specials.test.js';
import testSimple from './simple/simple.test.js';
import testScoped from './scoped/scoped.test.js';
import testNoDebug from './noDebug/noDebug.test.js';

export default function testLogger(): void {
    describe('Test Logger log methods', function () {
        testSpecials();
        testSimple();
        testScoped();
        testNoDebug();
    });
}
