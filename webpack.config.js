const path = require('path');
const nodeExternals = require('webpack-node-externals');
const BundleDeclarationsWebpackPlugin = require('bundle-declarations-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    target: 'node',
    mode: 'production',
    // devtool: 'source-map',
    entry: {
        index: './source/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({
            configFile: './source/tsconfig.json',
            extensions: ['.ts', '.js']
        })]
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
        new BundleDeclarationsWebpackPlugin({
            entry: "./source/index.ts",
            outFile: "./index.d.ts"
        })
    ],
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, './bundled'),
        filename: 'index.js',
        library: 'euberlog',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    }
}