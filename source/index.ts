export * from '@/types/index.js';
export * from '@/utils/logger.js';

import { Logger } from '@/utils/logger.js';
/** A default exported instance of the [Logger] class, created with the default options */
const logger = new Logger();
export default logger;
