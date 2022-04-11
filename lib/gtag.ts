declare global {
    interface Window {
        gtag: Gtag.Gtag;
    }
}

export const GA_TRACKING_ID = process.env['NEXT_PUBLIC_GA_ID'];

export function pageview(url?: string): void {
    if(!GA_TRACKING_ID) return;
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
}

export function event({ action, category?, label?, value? }: { action: Gtag.EventNames | string, category?: string, label?: string, value?: number }): void {
    if(!GA_TRACKING_ID) return;
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value
    });
}

