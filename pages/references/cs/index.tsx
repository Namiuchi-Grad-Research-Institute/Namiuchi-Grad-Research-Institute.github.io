'use strict';

import Footer from '../../../components/Footer';
import Head from 'next/head';
import Header from '../../../components/Header';
import Link from 'next/link';

export default function ReferenceCSharp(): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>C#リファレンス - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">C#リファレンス</h1>
                <p><Link href="/references/"><a>リファレンストップに戻る</a></Link></p>
                <p>C#のリファレンス、軽い入門を書いていきます。</p>
            </main>
            <Footer />
        </div>
    );
}

