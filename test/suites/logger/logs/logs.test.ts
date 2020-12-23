import testSpecials from './specials/specials.test';
import testSimple from './simple/simple.test';
import testScoped from './scoped/scoped.test';
import testNoDebug from './noDebug/noDebug.test';

export default function testLogger(): void {
    describe('Test Logger log methods', function () {
        testSpecials();
        testSimple();
        testScoped();
        testNoDebug();
    });
}
