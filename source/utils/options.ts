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

export function handleOptions(options: Options | string): InternalOptions {
    return typeof options === 'object'
        ? {
              palette: {
                  primary: {
                      info: options.palette?.primary?.info ?? DEFAULT_OPTIONS.palette.primary.info,
                      success: options.palette?.primary?.success ?? DEFAULT_OPTIONS.palette.primary.success,
                      debug: options.palette?.primary?.debug ?? DEFAULT_OPTIONS.palette.primary.debug,
                      warning: options.palette?.primary?.warning ?? DEFAULT_OPTIONS.palette.primary.warning,
                      error: options.palette?.primary?.error ?? DEFAULT_OPTIONS.palette.primary.error
                  },
                  secondary: {
                      info: options.palette?.secondary?.info ?? DEFAULT_OPTIONS.palette.secondary.info,
                      success: options.palette?.secondary?.success ?? DEFAULT_OPTIONS.palette.secondary.success,
                      debug: options.palette?.secondary?.debug ?? DEFAULT_OPTIONS.palette.secondary.debug,
                      warning: options.palette?.secondary?.warning ?? DEFAULT_OPTIONS.palette.secondary.warning,
                      error: options.palette?.secondary?.error ?? DEFAULT_OPTIONS.palette.secondary.error
                  }
              },
              debug: options.debug ?? DEFAULT_OPTIONS.debug,
              scope: options.scope ?? DEFAULT_OPTIONS.scope
          }
        : { ...DEFAULT_OPTIONS, scope: options };
}
