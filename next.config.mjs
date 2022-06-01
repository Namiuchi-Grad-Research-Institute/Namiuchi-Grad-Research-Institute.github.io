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
    exportPathMap: () => join(process.cwd(), 'out'),
    headers: async () => {
        return [
            {
                headers: [
                    {
                        key: 'access-control-allow-methods',
                        value: 'get, options, post'
                    },
                    {
                        key: 'access-control-allow-origin',
                        value: '*'
                    },
                    {
                        key: 'access-control-max-age',
                        value: '604800'
                    },
                    {
                        key: 'content-security-policy',
                        value: 'default-src \'self\'; connect-src \'self\' https://forum.ngri.jp; font-src \'self\' https://fonts.gstatic.com; img-src \'self\' https://forum.ngri.jp; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\' https://www.googletagmanager.com; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com'
                    },
                    {
                        key: 'strict-transport-security',
                        value: 'max-age=31536000'
                    },
                    {
                        key: 'x-content-type-options',
                        value: 'nosniff'
                    },
                    {
                        key: 'x-xss-protection',
                        value: '1; mode=block'
                    }
                ],
                source: '/:path*'
            }
        ];
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
