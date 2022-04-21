'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Reference(): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>リファレンス - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">リファレンス</h1>
                <p>当研究所が主に使っているプログラミング言語・マークアップ言語のリファレンス、軽い入門を書いていきます。</p>
                <div className="l-grid">
                    <Link href="/references/c/"><a className="card">C言語・C++</a></Link>
                    <Link href="/references/cs/"><a className="card">C#</a></Link>
                    <Link href="/references/html/"><a className="card">HTML</a></Link>
                    <Link href="/references/java/"><a className="card">Java</a></Link>
                    <Link href="/references/javascript/"><a className="card">JavaScript</a></Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

