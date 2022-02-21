'use strict';

import { addBasepath, delBasepath } from 'next/router';
import { UrlObject } from 'url';
import { denormalizePagePath } from 'next/dist/server/denormalize-page-path';
import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex';
import { isDynamicRoute } from 'next/dist/shared/lib/router/utils/is-dynamic';
import { removePathTrailingSlash } from 'next/dist/client/normalize-trailing-slash';

export function resolveDynamicRoute(parsedHref: UrlObject, pages: string[], applyBasePath = true): UrlObject {
    const { pathname } = parsedHref;
    const cleanPathname = removePathTrailingSlash(denormalizePagePath(applyBasePath ? delBasePath(pathname!) : pathname!));
    if(cleanPathname === '/404' || cleanPathname === '/_error') return parsedHref;
    if(!pages.includes(cleanPathname!)) {
        // eslint-disable-next-line array-callback-return
        pages.some(page => {
            if(isDynamicRoute(page) && getRouteRegex(page).re.test(cleanPathname!)) {
                parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
                return true;
            }
        });
    }
    parsedHref.pathname = removePathTrailingSlash(parsedHref.pathname!);
    return parsedHref;
}

