'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';
import styles from '../../styles/modules/Pages.module.scss';
import useSWR from 'swr';

type PageList = {
    created: string,
    description: string,
    id: number,
    modified: string,
    name: string,
    tags: string[]
}[];

export default function Pages(): JSX.Element {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
    const { data: pages, error } = useSWR<PageList, Error>('https://forum.ngri.jp/api/article/getall/', async (url: string) => await (await fetch(url)).json());
    if(error) return (
        <div id="l-container">
            <Head>
                <title>記事一覧読み込みエラー - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">記事一覧読み込みエラー</h1>
                <div className={styles['contents']}>
                    <p>記事一覧の読み込み中にエラーが発生しました。</p>
                    <p><Link href="/"><a>トップに戻る</a></Link></p>
                </div>
            </main>
            <Footer />
        </div>
    );
    if(!pages) return (
        <div id="l-container">
            <Head>
                <title>読み込み中 - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">読み込み中</h1>
                <div className={styles['contents']}>
                    <p>記事一覧を読み込み中です...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
    return (
        <div id="l-container">
            <Head>
                <title>記事一覧 - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">記事一覧</h1>
                <div className={styles['contents']}>
                    <div className="grid">{pages.map((page, i) => (
                        <Link key={i} href={`/pages/read?id=${i + 1}`}>
                            <a className="card">
                                <h2>{page.name}</h2>
                                <p>{page.description}</p>
                                <p>タグ：{page.tags.join('・')}</p>
                                <p>作成日：{parseDateString(page.created)}</p>
                                <p>最終更新日：{parseDateString(page.modified)}</p>
                            </a>
                        </Link>
                    ))}</div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function parseDateString(date: string): string {
    const arr: string[] = date.split('-');
    return `${arr[0]}年${arr[1]}月${arr[2]}日`;
}
