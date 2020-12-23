import * as moduleAlias from 'module-alias';
import * as path from 'path';
moduleAlias.addAlias('@', path.join(process.cwd(), 'dist', 'source'));
moduleAlias.addAlias('@test', path.join(process.cwd(), 'dist', 'test'));

import testLogger from '@test/suites/logger.test';

describe('euberlog tests', function () {
    testLogger();
});
