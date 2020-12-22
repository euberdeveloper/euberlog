const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

const rootDir = path.resolve(__dirname);

class DtsBundlePlugin {
    apply(compiler) {
        compiler.hooks.done.tap('DtsBundlePlugin', _stats => {
            const dts = require('dts-bundle');

            dts.bundle({
                name: 'index',
                main: path.join(rootDir, '/dist/types/**/*.d.ts'),
                out: path.join(rootDir, '/dist/index.d.ts'),
                removeSource: true,
                outputAsModuleFolder: true
            });
        });
    }
}

module.exports = {
    target: 'node',
    entry: {
        index: './source/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: path.resolve(__dirname, 'source'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ]
    },
    plugins: [
        new DtsBundlePlugin()
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'euberlog',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    }
}