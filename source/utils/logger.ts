import { Palette } from '@/types/palette';
import { InternalOptions, Options } from '@/types/options';

import { handleOptions } from './options';
import { colour } from './colour';

/**
 * The logger class, its instances will be the euber loggers.
 */
export class Logger {
    private options: InternalOptions;

    private get palette(): Palette {
        return this.options.palette;
    }
    private get showDebug(): boolean {
        return this.options.debug;
    }
    private get scope(): string | null {
        return this.options.scope;
    }

    /**
     * The constructor of the Logger class.
     * @param options The options of the logger. If you want to change only the scope you can pass it as a string.
     */
    public constructor(options?: Options | string) {
        this.setOptions(options);
    }

    /**
     * Sets the options of the logger.
     * @param options The options for the logger.
     */
    public setOptions(options?: Options | string): void {
        this.options = handleOptions(options ?? {}, this.options);
    }

    /**
     * Logs an info message. The format is "[INFO] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public info(message: string, object?: any): void {
        const tag = colour(this.palette.primary.info).bold('[INFO]');
        const scope = this.scope ? colour(this.palette.primary.info)(` {${this.scope}}`) : '';
        const msg = colour(this.palette.secondary.info)(` ${message}`);
        const text = `${tag}${scope}${msg}`;
        if (object) {
            console.log(text, object);
        } else {
            console.log(text);
        }
    }

    /**
     * Logs a success message. The format is "[SUCCESS] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public success(message: string, object?: any): void {
        const tag = colour(this.palette.primary.success).bold('[SUCCESS]');
        const scope = this.scope ? colour(this.palette.primary.success)(` {${this.scope}}`) : '';
        const msg = colour(this.palette.secondary.success)(` ${message}`);
        const text = `${tag}${scope}${msg}`;
        if (object) {
            console.log(text, object);
        } else {
            console.log(text);
        }
    }

    /**
     * Logs a debug message. The format is "[DEBUG] |{SCOPE}| message |object|", where |word| is optional. If specified in the options, nothing will be logged.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public debug(message: string, object?: any): void {
        if (this.showDebug) {
            const tag = colour(this.palette.primary.debug).bold('[DEBUG]');
            const scope = this.scope ? colour(this.palette.primary.debug)(` {${this.scope}}`) : '';
            const msg = colour(this.palette.secondary.debug)(` ${message}`);
            const text = `${tag}${scope}${msg}`;
            if (object) {
                console.debug(text, object);
            } else {
                console.debug(text);
            }
        }
    }

    /**
     * Logs a warning message. The format is "[WARNING] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public warning(message: string, object?: any): void {
        const tag = colour(this.palette.primary.warning).bold('[WARNING]');
        const scope = this.scope ? colour(this.palette.primary.warning)(` {${this.scope}}`) : '';
        const msg = colour(this.palette.secondary.warning)(` ${message}`);
        const text = `${tag}${scope}${msg}`;
        if (object) {
            console.warn(text, object);
        } else {
            console.warn(text);
        }
    }

    /**
     * Logs an error message. The format is "[ERROR] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public error(message: string, error?: any): void {
        const tag = colour(this.palette.primary.error).bold('[ERROR]');
        const scope = this.scope ? colour(this.palette.primary.error)(` {${this.scope}}`) : '';
        const msg = colour(this.palette.secondary.error)(` ${message}`);
        const text = `${tag}${scope}${msg}`;
        if (error) {
            console.error(text, error);
        } else {
            console.error(text);
        }
    }

    /**
     * Logs one or more empty lines.
     * @param n The number of empty lines. Default is 1.
     */
    public br(n = 1): void {
        for (let i = 0; i < n; i++) {
            console.log();
        }
    }

    /**
     * Logs one or more hr lines.
     * @param n The number of hr lines to print. Default is 1.
     * @param color The colour of the font. Default is 'white'.
     * @param symbol The symbol that constitutes the hr. Default is '-'.
     */
    public hr(n = 1, color = 'white', symbol = '-'): void {
        const terminalWidth = process.stdout.columns || 50;
        const hyphens = Array(terminalWidth).fill(symbol).join('');
        for (let i = 0; i < n; i++) {
            console.log(colour(color)(hyphens));
        }
    }
}
