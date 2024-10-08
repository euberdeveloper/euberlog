module.exports = {
    entryPoints: [
        './source'
    ],
    name: 'euberlog - DEV',
    navigationLinks: {
        'Github': 'https://github.com/euberdeveloper/euberlog'
    },
    sidebarLinks: {
        'Module docs': 'https://euberlog.euber.dev'
    },
    plugin: ['typedoc-plugin-ga'],
    tsconfig: 'source/tsconfig.json',
    gaID: process.env.GA_TOKEN,
    out: './docs/documentation/html-dev'
};