'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header';
import { Image } from '../components/Image';

export default function Home(): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>About - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">About</h1>
                <h2>メンバー</h2>
                <ul>
                    <li>
                        <ruby>渡波 空<rt>となみ そら</rt></ruby>
                        <p>デザインと翻訳以外は基本何でもやってる人。何気に創設者。</p>
                    </li>
                    <li>
                        ずすめ
                        <p>デザインと世界観の出処。ドット絵が得意。</p>
                    </li>
                    <li>
                        HARU13579
                        <p>プログラム担当。Unity勉強中。</p>
                    </li>
                    <li>
                        free
                        <p>デザイン担当。一応プログラム勉強してる。</p>
                    </li>
                    <li>
                       <ruby>田中<rt>たなか</rt></ruby> 
                        <p>総務部の人。方針決定とかだと思う。</p>
                    </li>
                    <li>
                        h2o2_n
                        <p>プログラム担当。多分最年長。</p>
                    </li>
                    <li>
                        NULL
                        <p>翻訳担当。本人曰く基本的に英語だが、別言語もやってはみるとのこと。</p>
                    </li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

