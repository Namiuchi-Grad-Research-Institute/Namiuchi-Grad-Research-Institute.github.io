'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';

export default function About(): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>About - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">About</h1>
                <div className="index">
                    <p>目次</p>
                    <ul>
                        <li><Link href="#member"><a>メンバー</a></Link></li>
                    </ul>
                </div>
                <h2 id="member">メンバー</h2>
                <ul>
                    <li>
                        <Link href="/member/渡波%20空"><a><ruby>渡波 空<rt>となみ そら</rt></ruby></a></Link>
                        <p>デザインと翻訳以外は基本何でもやってる人。何気に創設者。</p>
                    </li>
                    <li>
                        <Link href="/member/ずすめ"><a>ずすめ</a></Link>
                        <p>デザインと世界観の出処。ドット絵が得意。</p>
                    </li>
                    <li>
                        <Link href="/member/HARU13579"><a>HARU13579</a></Link>
                        <p>プログラム担当。Unity勉強中。</p>
                    </li>
                    <li>
                        <Link href="/member/free"><a>free</a></Link>
                        <p>デザイン担当。一応プログラム勉強してる。</p>
                    </li>
                    <li>
                       <Link href="/member/田中"><a><ruby>田中<rt>たなか</rt></ruby></a></Link>
                        <p>総務部の人。方針決定とかだと思う。</p>
                    </li>
                    <li>
                        <Link href="/member/h2o2_n"><a>h2o2_n</a></Link>
                        <p>プログラム担当。多分最年長。</p>
                    </li>
                    <li>
                        <Link href="/member/NULL"><a>NULL</a></Link>
                        <p>翻訳担当。本人曰く基本的に英語だが、別言語もやってはみるとのこと。</p>
                    </li>
                    <li>
                        <Link href="/member/奈良県京都市"><a><ruby>奈良県京都市<rt>ならけんきょうとし</rt></ruby></a></Link>
                        <p>会社で言う社長的な人。みんなこの人繋がりで集まった。一応人工知能系。</p>
                    </li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

