import { DeepPartial } from 'ts-essentials';
import { Palette } from '../palette';

/**
 * The internal options of the logger.
 */
export interface InternalOptions {
    /**
     * The color palette that specifies which colour to use for the various log types.
     */
    palette: Palette;
    /**
     * If the debug messages will be printed.
     */
    debug: boolean;
    /**
     * The scope of the logger, printed as {SCOPE} before the [TYPE] tag.
     */
    scope: string | null;
}

/**
 * The options of the logger.
 */
export type Options = DeepPartial<InternalOptions>;
