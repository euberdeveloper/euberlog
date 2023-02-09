import { Options, InternalOptions } from '@/types/options/index.js';
import { PaletteDefinitions } from '@/types/palette/index.js';

/**
 * The default options of the library. The options passed by the user will be merged with these options.
 */
export const DEFAULT_OPTIONS: InternalOptions = {
    palette: {
        primary: {
            info: 'blue',
            success: 'green',
            debug: 'gray',
            warning: 'yellow',
            error: 'red'
        },
        secondary: {
            info: '#81A2BE',
            success: '#B5BD68',
            debug: '#C5C8C6',
            warning: '#F0C674',
            error: '#CC6666'
        }
    },
    debug: true,
    scope: null
};

/**
 * Merges partial options with some default options.
 * @param options The partial options to purge and merge.
 * @param defaultOptions The default options value (default is DEFAULT_OPTIONS) for the not specified values in the options parameter.
 */
export function handleOptions(options: Options | string, defaultOptions = DEFAULT_OPTIONS): InternalOptions {
    function handlePaletteDefinitions(property: 'primary' | 'secondary'): PaletteDefinitions {
        const opt = options as Options;

        return {
            info: opt.palette?.[property]?.info ?? defaultOptions.palette[property].info,
            success: opt.palette?.[property]?.success ?? defaultOptions.palette[property].success,
            debug: opt.palette?.[property]?.debug ?? defaultOptions.palette[property].debug,
            warning: opt.palette?.[property]?.warning ?? defaultOptions.palette[property].warning,
            error: opt.palette?.[property]?.error ?? defaultOptions.palette[property].error
        };
    }

    return typeof options === 'object'
        ? {
              palette: {
                  primary: handlePaletteDefinitions('primary'),
                  secondary: handlePaletteDefinitions('secondary')
              },
              debug: options.debug ?? defaultOptions.debug,
              scope: options.scope !== undefined ? options.scope : defaultOptions.scope
          }
        : { ...defaultOptions, scope: options };
}
