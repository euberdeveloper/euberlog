import testConstructor from './constructor/constructor.test';
import testLogs from './logs/logs.test';
import testSetOptions from './setOptions/setOptions.test';

export default function testLogger(): void {
    describe('Test @/utils/logger.ts', function () {
        testConstructor();
        testLogs();
        testSetOptions();
    });
}
