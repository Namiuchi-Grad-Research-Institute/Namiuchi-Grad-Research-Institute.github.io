'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
