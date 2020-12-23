import { Options, InternalOptions } from '@/types/options';

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
    return typeof options === 'object'
        ? {
              palette: {
                  primary: {
                      info: options.palette?.primary?.info ?? defaultOptions.palette.primary.info,
                      success: options.palette?.primary?.success ?? defaultOptions.palette.primary.success,
                      debug: options.palette?.primary?.debug ?? defaultOptions.palette.primary.debug,
                      warning: options.palette?.primary?.warning ?? defaultOptions.palette.primary.warning,
                      error: options.palette?.primary?.error ?? defaultOptions.palette.primary.error
                  },
                  secondary: {
                      info: options.palette?.secondary?.info ?? defaultOptions.palette.secondary.info,
                      success: options.palette?.secondary?.success ?? defaultOptions.palette.secondary.success,
                      debug: options.palette?.secondary?.debug ?? defaultOptions.palette.secondary.debug,
                      warning: options.palette?.secondary?.warning ?? defaultOptions.palette.secondary.warning,
                      error: options.palette?.secondary?.error ?? defaultOptions.palette.secondary.error
                  }
              },
              debug: options.debug ?? defaultOptions.debug,
              scope: options.scope ?? defaultOptions.scope
          }
        : { ...defaultOptions, scope: options };
}
