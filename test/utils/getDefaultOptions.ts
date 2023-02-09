/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Chalk } from 'chalk';

import { colour } from '@src/utils/colour.js';
import { DEFAULT_OPTIONS } from '@src/utils/options.js';

export function getDefaultColors(type: string): { COLOUR_PRIMARY: Chalk; COLOUR_SECONDARY: Chalk } {
    return {
        COLOUR_PRIMARY: colour(DEFAULT_OPTIONS.palette.primary[type]),
        COLOUR_SECONDARY: colour(DEFAULT_OPTIONS.palette.secondary[type])
    };
}

export function getHrPattern(color: string, symbol: string, n?: number): RegExp {
    const template = colour(color)('TEMPLATE');
    const [pre, post] = template.split('TEMPLATE').map(v => v.replace('[', '\\['));
    const nPattern = n ? `{${n}}` : '+';
    return new RegExp(`^${pre}${symbol}${nPattern}${post}$`);
}
