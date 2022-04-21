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
                <ul>
                    <li><Link href="/references/c/"><a>C言語・C++</a></Link></li>
                    <li><Link href="/references/cs/"><a>C#</a></Link></li>
                    <li><Link href="/references/html/"><a>HTML</a></Link></li>
                    <li><Link href="/references/java/"><a>Java</a></Link></li>
                    <li><Link href="/references/javascript/"><a>JavaScript</a></Link></li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

