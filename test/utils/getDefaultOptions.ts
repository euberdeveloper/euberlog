/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as path from 'path';
import { Chalk } from 'chalk';
import rewire = require('rewire');

import { InternalOptions } from '@/types/options';
import { colour } from '@/utils/colour';

const DEFAULT_OPTIONS: InternalOptions = rewire(
    path.join(process.cwd(), 'dist', 'source', 'utils', 'options.js')
).__get__('DEFAULT_OPTIONS');

export { DEFAULT_OPTIONS };

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
