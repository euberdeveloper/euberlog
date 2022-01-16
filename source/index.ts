export * from '@/types';
export * from '@/utils/logger';

import { Logger } from '@/utils/logger';
/** A default exported instance of the [Logger] class, created with the default options */
const logger = new Logger();
export default logger;
