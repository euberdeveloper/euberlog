const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const DtsBundleWebpack = require('dts-bundle-webpack')


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
    plugins: [
        new DtsBundleWebpack({
            name: 'euberlog',
            main: 'dist/index.d.ts',
            out: '../bundled/index.d.ts'
        })
      ],
    externals: [nodeExternals()],
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ]
    },
    output: {
        path: path.resolve(__dirname, './bundled'),
        filename: 'index.js',
        library: 'euberlog',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    }
}