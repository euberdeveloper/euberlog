import { Options, InternalOptions } from '@/types/options';
import { PaletteDefinitions } from '@/types/palette';

const DEFAULT_OPTIONS: InternalOptions = {
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
