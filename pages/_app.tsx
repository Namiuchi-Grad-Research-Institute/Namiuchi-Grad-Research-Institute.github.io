'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '../lib/gtag';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string): void => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <Component {...pageProps} />
    );
}
