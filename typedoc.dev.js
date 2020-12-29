module.exports = {
    mode: 'modules',
    name: 'euberlog - DEV',
    entryPoint: 'source/index.ts',
    includeVersion: true,
    tsconfig: 'source/tsconfig.json',
    gaID: process.env.GA_TOKEN,
    out: './docs/documentation/html-dev'
};