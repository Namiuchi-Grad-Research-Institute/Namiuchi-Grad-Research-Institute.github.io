/* eslint-disable camelcase */
'use strict';

import Script from 'next/script';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
    interface Window {
        gtag: Gtag.Gtag;
    }
}

export const GA_TRACKING_ID = process.env['NEXT_PUBLIC_GA_ID'] || '';

export const existsID = GA_TRACKING_ID !== '';

export const GoogleAnalytics = (): JSX.Element => {
    return (
        <>
            {existsID && (
                <>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
                    <Script defer id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_TRACKING_ID}',{page_path:window.location.pathname})`}</Script>
                </>
            )}
        </>
    );
}

export const event = ({ action, category, label, value }: { action: Gtag.EventNames | string, category?: string, label?: string, value?: number }): void => {
    if(!GA_TRACKING_ID) return;
    window.gtag('event', action, {
        event_category: category,
        event_label: JSON.stringify(label),
        value
    });
}

export const pageview = (path?: string): void => {
    if(!GA_TRACKING_ID) return;
    if(typeof window.gtag !== 'undefined') window.gtag('config', GA_TRACKING_ID, {
        page_path: path
    });
}

export const usePageView = (): void => {
    const router: NextRouter = useRouter();
    useEffect(() => {
        if(!existsID) return;
        const handleRouteChange = (path: string): void => pageview(path);
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => router.events.off('routeChangeComplete', handleRouteChange);
    }, [router.events]);
}
