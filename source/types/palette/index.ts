/**
 * A palette definition interface.
 */
interface PaletteDefinitions {
    /**
     * The colour for the info logs. Note: the colour can be a valid chalk colour (such as 'white'), an hex colour (such as '#FFFFFF'), an RGB colour (such as '(255, 255, 255)') or a css keyword (such as 'orange')
     */
    info: string;
    /**
     * The colour for the success logs. Note: the colour can be a valid chalk colour (such as 'white'), an hex colour (such as '#FFFFFF'), an RGB colour (such as '(255, 255, 255)') or a css keyword (such as 'orange')
     */
    success: string;
    /**
     * The colour for the debug logs. Note: the colour can be a valid chalk colour (such as 'white'), an hex colour (such as '#FFFFFF'), an RGB colour (such as '(255, 255, 255)') or a css keyword (such as 'orange')
     */
    debug: string;
    /**
     * The colour for the warning logs. Note: the colour can be a valid chalk colour (such as 'white'), an hex colour (such as '#FFFFFF'), an RGB colour (such as '(255, 255, 255)') or a css keyword (such as 'orange')
     */
    warning: string;
    /**
     * The colour for the error logs. Note: the colour can be a valid chalk colour (such as 'white'), an hex colour (such as '#FFFFFF'), an RGB colour (such as '(255, 255, 255)') or a css keyword (such as 'orange')
     */
    error: string;
}

/**
 * The colour palette that specifies a colour.
 */
export interface Palette {
    /**
     * The primary colours, used for the tag and the scope.
     */
    primary: PaletteDefinitions;
    /**
     * The secondary colours, used for the texts.
     */
    secondary: PaletteDefinitions;
}
