import 'module-alias/register';

import { Logger } from './utils/logger';

const logger = new Logger('SCOPE');

logger.info('ciao');
logger.info('ciao', { a: 2 });

logger.success('ciao');
logger.success('ciao', { a: 2 });

logger.debug('ciao');
logger.debug('ciao', { a: 2 });

logger.warning('ciao');
logger.warning('ciao', { a: 2 });

logger.error('ciao');
logger.error('ciao', { a: 2 });

logger.hr(1, 'blue');
