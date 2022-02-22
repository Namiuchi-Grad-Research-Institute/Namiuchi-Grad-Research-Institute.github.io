'use strict';

import Error from 'next/error';
import SingletonRouter from 'next/router';
import { resolveDynamicRoute } from '../lib/Route';
import { useEffect, useState } from 'react';
import type { SingletonRouter } from 'next/router';

export default function NotFoundPage(): JSX.Element {
    const [isError, setIsError] = useState(false);
    const router: SingletonRouter = SingletonRouter.router!;
    useEffect(() => {
        (async () => {
            const pages = await router.pageLoader.getPageList();
            const resolvedRoute = resolveDynamicRoute({ pathname: router.asPath }, pages);
            if(pages.includes(resolvedRoute.pathname)) router.replace(resolvedRoute.pathname, router.asPath);
            else setIsError(true);
        })();
    }, []);
    return (
        <>
            {isError && <Error statusCode={404} />}
        </>
    );
}

