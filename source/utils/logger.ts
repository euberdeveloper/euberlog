import { Palette } from '@/types/palette';
import { Options } from '@/types/options';

import { handleOptions } from './options';
import { colour } from './colour';

export class Logger {
    private palette: Palette;
    private showDebug: boolean;
    private scope: string | null;

    public constructor(options?: Options | string) {
        this.setOptions(options);
    }

    public setOptions(options?: Options | string): void {
        const handledOptions = handleOptions(options);
        this.palette = handledOptions.palette;
        this.showDebug = handledOptions.debug;
        this.scope = handledOptions.scope;
    }

    public info(message: string, object?: any): void {
        const tag = colour(this.palette.primary.info).bold('[INFO]');
        const scope = this.scope ? colour(this.palette.primary.info)(` {${this.scope}}`) : '';
        const text = colour(this.palette.secondary.info)(`${tag}${scope} ${message}`);
        if (object) {
            console.log(text, object);
        } else {
            console.log(text);
        }
    }

    public success(message: string, object?: any): void {
        const tag = colour(this.palette.primary.success).bold('[SUCCESS]');
        const scope = this.scope ? colour(this.palette.primary.success)(` {${this.scope}}`) : '';
        const text = colour(this.palette.secondary.success)(`${tag}${scope} ${message}`);
        if (object) {
            console.log(text, object);
        } else {
            console.log(text);
        }
    }

    public debug(message: string, object?: any): void {
        if (this.showDebug) {
            const tag = colour(this.palette.primary.debug)('[DEBUG]');
            const scope = this.scope ? colour(this.palette.primary.debug)(` {${this.scope}}`) : '';
            const text = colour(this.palette.secondary.debug)(`${tag}${scope} ${message}`);
            if (object) {
                console.debug(text, object);
            } else {
                console.debug(text);
            }
        }
    }

    public warning(message: string, object?: any): void {
        const tag = colour(this.palette.primary.warning).bold('[WARNING]');
        const scope = this.scope ? colour(this.palette.primary.warning)(` {${this.scope}}`) : '';
        const text = colour(this.palette.secondary.warning)(`${tag}${scope} ${message}`);
        if (object) {
            console.warn(text, object);
        } else {
            console.warn(text);
        }
    }

    public error(message: string, error?: any): void {
        const tag = colour(this.palette.primary.error).bold('[ERROR]');
        const scope = this.scope ? colour(this.palette.primary.error)(` {${this.scope}}`) : '';
        const text = colour(this.palette.secondary.error)(`${tag}${scope} ${message}`);
        if (error) {
            console.error(text, error);
        } else {
            console.error(text);
        }
    }

    public br(n?: number): void {
        n = n ?? 1;
        for (let i = 0; i < n; i++) {
            console.log();
        }
    }

    public hr(n?: number, color = 'white', symbol = '-'): void {
        n = n ?? 1;
        const terminalWidth = process.stdout.columns || 50;
        const hyphens = Array(terminalWidth).fill(symbol).join('');
        for (let i = 0; i < n; i++) {
            console.log(colour(color)(hyphens));
        }
    }
}
