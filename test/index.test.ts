import * as moduleAlias from 'module-alias';
import * as path from 'path';
moduleAlias.addAlias('@', path.join(process.cwd(), 'dist', 'source'));
moduleAlias.addAlias('@src', path.join(process.cwd(), 'dist', 'source'));
moduleAlias.addAlias('@test', path.join(process.cwd(), 'dist', 'test'));

import * as chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import testLogger from '@test/suites/logger/logger.test';
import testColour from '@test/suites/colour/colour.test';
import testHandleOptions from '@test/suites/handleOptions/handleOptions.test';

describe('euberlog tests', function () {
    testLogger();
    testColour();
    testHandleOptions();
});
