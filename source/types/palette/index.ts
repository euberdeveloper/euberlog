interface PaletteDefinitions {
    info: string;
    success: string;
    debug: string;
    warning: string;
    error: string;
}

export interface Palette {
    primary: PaletteDefinitions;
    secondary: PaletteDefinitions;
}
