import { Palette } from '@/types/palette/index.js';
import { InternalOptions, Options } from '@/types/options/index.js';

import { handleOptions } from './options.js';
import { colour } from './colour.js';

/**
 * The logger class, its instances will be the euber loggers.
 */
export class Logger {
    /**
     * The options passed to the logger, purged to InternalOptions.
     */
    private options: InternalOptions;

    /**
     * The palette of the colours.
     */
    private get palette(): Palette {
        return this.options.palette;
    }
    /**
     * If the debug logs will be shown.
     */
    private get showDebug(): boolean {
        return this.options.debug;
    }
    /**
     * The scope of the logger.
     */
    private get scope(): string | null {
        return this.options.scope;
    }

    /**
     * The constructor of the Logger class.
     * @param options The options of the logger. If you want to change only the scope you can pass it as a string.
     */
    constructor(options?: Options | string) {
        this.setOptions(options);
    }

    /**
     * An helper method for logging a message.
     * @param message The message text to be logged.
     * @param logName The log name, one of 'info', 'success', 'debug', 'warning' or 'error'. It is used for the [TAG] or the palette colour.
     * @param logFunction The log function, console.[function] is the function used to print the log.
     * @param object The optional object to print with the message.
     */
    private logMessage(message: string, logName: string, logFunction: string, object?: any): void {
        const tag = colour(this.palette.primary[logName]).bold(`[${logName.toUpperCase()}]`);
        const scope = this.scope ? colour(this.palette.primary[logName])(` {${this.scope}}`) : '';
        const msg = colour(this.palette.secondary[logName])(` ${message}`);
        const text = `${tag}${scope}${msg}`;
        if (object) {
            console[logFunction](text, object);
        } else {
            console[logFunction](text);
        }
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
        this.logMessage(message, 'info', 'log', object);
    }

    /**
     * Logs a success message. The format is "[SUCCESS] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public success(message: string, object?: any): void {
        this.logMessage(message, 'success', 'log', object);
    }

    /**
     * Logs a debug message. The format is "[DEBUG] |{SCOPE}| message |object|", where |word| is optional. If specified in the options, nothing will be logged.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public debug(message: string, object?: any): void {
        if (this.showDebug) {
            this.logMessage(message, 'debug', 'debug', object);
        }
    }

    /**
     * Logs a warning message. The format is "[WARNING] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public warning(message: string, object?: any): void {
        this.logMessage(message, 'warning', 'warn', object);
    }

    /**
     * Logs an error message. The format is "[ERROR] |{SCOPE}| message |object|", where |word| is optional.
     * @param message The message to be logged.
     * @param object An optional object to log.
     */
    public error(message: string, error?: any): void {
        this.logMessage(message, 'error', 'error', error);
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
        const hyphens = new Array(terminalWidth).fill(symbol).join('');
        for (let i = 0; i < n; i++) {
            console.log(colour(color)(hyphens));
        }
    }
}
