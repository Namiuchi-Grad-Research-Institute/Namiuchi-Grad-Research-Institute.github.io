'use strict';

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document<{ prefix?: string }> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        /* eslint-disable-next-line no-undefined */
        const prefix: string | undefined = ctx.pathname.startsWith('/404') ? undefined : 'og: http://ogp.me/ns#';
        return { ...initialProps, prefix };
    }

    render() {
        return (
            <Html lang="ja" prefix={this.props.prefix}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="access-control-allow-methods" content="get, options, post" />
                    <meta httpEquiv="access-control-allow-origin" content="*" />
                    <meta httpEquiv="access-control-max-age" content="604800" />
                    <meta httpEquiv="content-security-policy" content="default-src 'self'; connect-src 'self' https://forum.ngri.jp; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://forum.ngri.jp; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com" />
                    <meta httpEquiv="strict-transport-security" content="max-age=31536000" />
                    <meta httpEquiv="x-content-type-options" content="nosniff" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta httpEquiv="x-xss-protection" content="1; mode=block" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env['NEXT_PUBLIC_GA_ID']}`} strategy="afterInteractive" />
                    <Script src="/js/gtag.js" strategy="afterInteractive" />
                    <meta name="msapplication-square70x70logo" content="/site-tile-70x70.png" />
                    <meta name="msapplication-square150x150logo" content="/site-tile-150x150.png" />
                    <meta name="msapplication-wide310x150logo" content="/site-tile-310x150.png" />
                    <meta name="msapplication-square310x310logo" content="/site-tile-310x310.png" />
                    <meta name="msapplication-TileColor" content="#0083ff" />
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                    <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
                    <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="36x36" href="/icon/android-chrome-36x36.png" />
                    <link rel="icon" type="image/png" sizes="48x48" href="/icon/android-chrome-48x48.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/icon/android-chrome-72x72.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/icon/android-chrome-96x96.png" />
                    <link rel="icon" type="image/png" sizes="128x128" href="/icon/android-chrome-128x128.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="/icon/android-chrome-144x144.png" />
                    <link rel="icon" type="image/png" sizes="152x152" href="/icon/android-chrome-152x152.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="256x256" href="/icon/android-chrome-256x256.png" />
                    <link rel="icon" type="image/png" sizes="384x384" href="/icon/android-chrome-384x384.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/icon/android-chrome-512x512.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icon/icon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="24x24" href="/icon/icon-24x24.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icon/icon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="36x36" href="/icon/icon-36x36.png" />
                    <link rel="icon" type="image/png" sizes="48x48" href="/icon/icon-48x48.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/icon/icon-72x72.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/icon/icon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="128x128" href="/icon/icon-128x128.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="/icon/icon-144x144.png" />
                    <link rel="icon" type="image/png" sizes="152x152" href="/icon/icon-152x152.png" />
                    <link rel="icon" type="image/png" sizes="160x160" href="/icon/icon-160x160.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/icon/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="196x196" href="/icon/icon-196x196.png" />
                    <link rel="icon" type="image/png" sizes="256x256" href="/icon/icon-256x256.png" />
                    <link rel="icon" type="image/png" sizes="384x384" href="/icon/icon-384x384.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/icon/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/icon/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="/icon/apple-touch-icon-60x60.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/icon/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="/icon/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/icon/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="/icon/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/icon/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/icon/apple-touch-icon-152x152.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/icon/apple-touch-icon-180x180.png" />
                    <link rel="manifest" type="application/json" href="/manifest.json" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Sawarabi+Mincho&display=swap" />
                    <meta name="description" content="ゲーム制作集団「NGRI」のホームページです。" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

