module.exports = {
    entryPoints: [
        './source/index.ts'
    ],
    name: 'euberlog',
    navigationLinks: {
        'Github': 'https://github.com/euberdeveloper/euberlog'
    },
    sidebarLinks: {
        'DEV docs': 'https://euberlog-dev.euber.dev'
    },
    excludeExternals: true,
    includeVersion: true,
    tsconfig: 'source/tsconfig.json',
    gaID: process.env.GA_TOKEN,
    excludePrivate: true,
    excludeProtected: true,
    disableSources: true,
    out: './docs/documentation/html'
};