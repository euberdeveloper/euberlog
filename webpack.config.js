const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'euberlog',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    }
}