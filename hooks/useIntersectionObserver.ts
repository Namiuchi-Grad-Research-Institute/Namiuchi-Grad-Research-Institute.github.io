// https://usehooks-typescript.com/react-hook/use-intersection-observer
'use strict';

import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(elementRef: RefObject<Element>, { freezeOnceVisible = false, root = null, rootMargin = '0%', threshold = 0 }: Args): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const frozen = entry?.isIntersecting && freezeOnceVisible;
    useEffect(() => {
        const node = elementRef?.current;
        if(!window.IntersectionObserver || frozen || !node) return;
        const observer = new IntersectionObserver(([e]: IntersectionObserverEntry[]): void => setEntry(e), { root, rootMargin, threshold });
        observer.observe(node);
        /* eslint-disable-next-line consistent-return */
        return () => observer.disconnect();
    }, [elementRef, frozen, root, rootMargin, threshold]);
    return entry;
}
