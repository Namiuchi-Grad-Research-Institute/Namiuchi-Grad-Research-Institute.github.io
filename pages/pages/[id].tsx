'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { role2str } from '../../lib/MemberData';

type Page = {
    birthday: string,
    gender: [string, string, string],
    name: string,
    role: string[],
    ruby: string,
    sp: string
};

type Props = {
    page: Page
};

interface Params extends ParsedUrlQuery {
    id: string
}

export default function Pages({ page }: Props): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>{page.name} - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">{member.name}</h1>
                <div className={styles.contents} dangerouslySetInnerHTML={{ __html: page.body }}></div>
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
    const res: Response = await fetch('https://forum.ngri.jp/api/article/getall/');
    const pages: Member[] = await res.json();
    const paths: string[] = pages.map((page: Page) => `/pages/${page.id}`);
    return { fallback: false, paths };
}

export async function getStaticProps(ctx: GetStaticPropsContext<Params, false>): Promise<GetStaticPropsResult<Props>> {
    const res: Response = await fetch(`https://forum.ngri.jp/api/article/getdata/?id=${ctx.params!.id}`);
    const page: Page = await res.json();
    return { props: { page } };
}

