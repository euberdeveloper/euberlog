import testConstructor from './constructor/constructor.test';
import testDefaultInstance from './defaultInstance/defaultInstance.test';
import testLogs from './logs/logs.test';
import testSetOptions from './setOptions/setOptions.test';

export default function testLogger(): void {
    describe('Test @/utils/logger.ts', function () {
        testConstructor();
        testDefaultInstance();
        testLogs();
        testSetOptions();
    });
}
