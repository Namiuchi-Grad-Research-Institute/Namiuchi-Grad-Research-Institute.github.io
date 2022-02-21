'use strict';

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ja">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            });
                        `
                    }} />
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Sawarabi+Mincho&display=swap" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="ゲーム制作集団「NGRI」のホームページです。" />
                    <meta name="viewport" content="width=device-width,initialize-scale=1" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

