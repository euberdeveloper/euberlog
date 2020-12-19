import { DeepPartial } from 'ts-essentials';
import { Palette } from '../palette';

export interface InternalOptions {
    palette: Palette;
    debug: boolean;
    scope: string | null;
}

export type Options = DeepPartial<InternalOptions>;
