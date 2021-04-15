const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json')
    },
    plugins: ['@euberdeveloper'],
    extends: [
        'plugin:@euberdeveloper/typescript',
        'plugin:@euberdeveloper/prettier'
    ]
};