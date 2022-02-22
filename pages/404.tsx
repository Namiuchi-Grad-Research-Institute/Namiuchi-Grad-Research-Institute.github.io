'use strict';

import Error from "next/error";
import { resolveDynamicRoute } from '../lib/Route';
import { useEffect, useState } from "react";
import { NextRouter, Router, getRouter } from "next/router";

export default function NotFoundPage(): JSX.Element {
    const [isError, setIsError] = useState(false);
    const router: Router = getRouter();
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

