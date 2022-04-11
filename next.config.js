'use strict';

const path = require('path');

const optimizedImagesConfig = {
    optimizeImagesInDev: true,
    removeOriginalExtension: true,
    responsive: {
        adapter: require('responsive-loader/sharp'),
        sizes: [640, 960, 1200, 1800]
    }
};

module.exports = {
    eslint: {
        dirs: [
            'components',
            'hooks',
            'lib',
            'pages'
        ]
    },
    experimental: {
        esmExternals: true
    },
    exportPathMap: path.join(__dirname, 'out'),
    images: {
        disableStaticImages: true
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles')
        ]
    },
    trailingSlash: true,
    webpack: config => {
        config.module.rules.push({
            test: /(\.eot|\.otf|\.ttf|\.woff|\.woff2)$/,
            use: 'raw-loader'
        });
        return config;
    }
};

