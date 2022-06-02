'use strict';

import { join } from 'path';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
    images: {
        disableStaticImages: true
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            join(process.cwd(), 'styles')
        ]
    },
    trailingSlash: true,
    webpack: config => {
        config.module.rules.push({
            test: /\.(eot|[ot]t[cf]|woff2?)$/i,
            use: 'raw-loader'
        }, {
            test: /\.(gif|jpe?g|png|webp)$/i,
            use: {
                loader: 'responsive-loader',
                options: {
                    /** @type {(imagePath: string) => { metadata: () => Promise<{ width: number, height: number }> resize: (config: { width: number, mime: string, options: Object }) => Promise<{ data: Buffer, width: number, height: number }> }} */
                    adapter: import('responsive-loader/sharp.js'),
                    esModule: true,
                    format: 'webp',
                    name: '[path][name].[hash].[width].[ext]',
                    outputPath: 'static/chunks/images/',
                    placeholder: true,
                    placeholderSize: 20,
                    publicPath: '/_next/static/chunks/images/',
                    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
                }
            }
        });
        return config;
    }
};

export default nextConfig;
