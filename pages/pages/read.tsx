'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';
import styles from '../../styles/modules/Pages.module.scss';
import useSWR from 'swr';
import { NextRouter, useRouter } from 'next/router';

type Page = {
    body: string,
    created: string,
    description: string,
    id: number,
    modified: string,
    name: string,
    tags: string[]
};

export default function PageRead(): JSX.Element {
    const router: NextRouter = useRouter();
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
    const { data: page, error } = useSWR<Page, Error>(`https://forum.ngri.jp/api/article/getdata/?id=${router.query['id']}`, async (url: string) => await (await fetch(url)).json());
    if(!router.query['id']) return (
        <div id="l-container">
            <Head>
                <title>記事読み込みエラー - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">記事読み込みエラー</h1>
                <div className={styles['contents']}>
                    <p>記事の読み込み中にエラーが発生しました。</p>
                    <p>記事IDが指定されていません。</p>
                    <p><Link href="/"><a>トップに戻る</a></Link></p>
                </div>
            </main>
            <Footer />
        </div>
    );
    if(error) return (
        <div id="l-container">
            <Head>
                <title>記事読み込みエラー - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">記事読み込みエラー</h1>
                <div className={styles['contents']}>
                    <p>記事の読み込み中にエラーが発生しました。</p>
                    <p><Link href="/"><a>トップに戻る</a></Link></p>
                </div>
            </main>
            <Footer />
        </div>
    );
    if(!page) return (
        <div id="l-container">
            <Head>
                <title>読み込み中 - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">読み込み中</h1>
                <div className={styles['contents']}>
                    <p>記事を読み込み中です...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
    return (
        <div id="l-container">
            <Head>
                <title>{page.name} - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">{page.name}</h1>
                <div className={styles['contents']} dangerouslySetInnerHTML={{ __html: page.body }}></div>
                <div className={styles['tags']}>
                    タグ：{page.tags.join('・')}
                </div>
            </main>
            <Footer />
        </div>
    );
}
