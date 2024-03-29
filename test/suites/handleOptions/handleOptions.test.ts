import { handleOptions, DEFAULT_OPTIONS } from '@src/utils/options.js';

describe('Test @/utils/options', function () {
    it('Should return the default options', function () {
        const options = handleOptions({});
        const expected = DEFAULT_OPTIONS;
        expect(options).toEqual(expected);
    });

    it('Should set only the scope to "SCOPE"', function () {
        const options = handleOptions('SCOPE');
        const expected = { ...DEFAULT_OPTIONS, scope: 'SCOPE' };
        expect(options).toEqual(expected);
    });

    it('Should set only the scope to "MYSCOPE"', function () {
        const options = handleOptions('MYSCOPE');
        const expected = { ...DEFAULT_OPTIONS, scope: 'MYSCOPE' };
        expect(options).toEqual(expected);
    });

    it('Should set only the debug to false', function () {
        const options = handleOptions({ debug: false });
        const expected = { ...DEFAULT_OPTIONS, debug: false };
        expect(options).toEqual(expected);
    });

    it('Should set both the debug to false and the scope to "SCOPE"', function () {
        const options = handleOptions({ debug: false, scope: 'SCOPE' });
        const expected = { ...DEFAULT_OPTIONS, debug: false, scope: 'SCOPE' };
        expect(options).toEqual(expected);
    });

    it('Should set only the primary info colour', function () {
        const options = handleOptions({
            palette: {
                primary: { info: 'orange' }
            }
        });
        const expected = {
            ...DEFAULT_OPTIONS.palette,
            primary: { ...DEFAULT_OPTIONS.palette.primary, info: 'orange' }
        };
        expect(options.palette).toEqual(expected);
    });

    it('Should set only the primary colours', function () {
        const options = handleOptions({
            palette: {
                primary: {
                    info: 'orange',
                    success: 'blue',
                    debug: 'green',
                    error: '#ABBABA',
                    warning: 'gray'
                }
            }
        });
        const expected = {
            info: 'orange',
            success: 'blue',
            debug: 'green',
            error: '#ABBABA',
            warning: 'gray'
        };
        expect(options.palette.primary).toEqual(expected);
    });

    it('Should set the secondary colours and the scope', function () {
        const options = handleOptions({
            palette: {
                secondary: {
                    info: 'orange',
                    success: 'blue',
                    debug: 'green',
                    error: '#ABBABA',
                    warning: 'gray'
                }
            },
            scope: 'CONTESTO'
        });
        const expected = {
            info: 'orange',
            success: 'blue',
            debug: 'green',
            error: '#ABBABA',
            warning: 'gray'
        };
        expect(options.palette.secondary).toEqual(expected);
        expect(options.scope).toEqual('CONTESTO');
    });
});
