'use strict';

import Footer from '../../../components/Footer';
import Head from 'next/head';
import Header from '../../../components/Header';
import Link from 'next/link';

export default function ReferenceHTML(): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>HTMLリファレンス - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">HTMLリファレンス</h1>
                <p><Link href="/references/"><a>リファレンストップに戻る</a></Link></p>
                <p>HTMLのリファレンス、軽い入門を書いていきます。</p>
            </main>
            <Footer />
        </div>
    );
}

