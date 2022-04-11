const path = require('path');

module.exports = {
    '*.{j,t}s{,x}': [
        filenames => `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`
    ]
};

