import testConstructor from './constructor/constructor.test.js';
import testDefaultInstance from './defaultInstance/defaultInstance.test.js';
import testLogs from './logs/logs.test.js';
import testSetOptions from './setOptions/setOptions.test.js';

export default function testLogger(): void {
    describe('Test @/utils/logger.ts', function () {
        testConstructor();
        testDefaultInstance();
        testLogs();
        testSetOptions();
    });
}
