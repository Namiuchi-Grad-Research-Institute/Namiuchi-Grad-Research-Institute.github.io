'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header';
import { Image } from '../components/Image';

export default function Home(): JSX.Element {
    return (
        <div className="container">
            <Head>
                <title>NGRI</title>
            </Head>
            <Header />
            <main className="main">
                <h1 className="title">NGRI ナミウチグラード研究所</h1>
                <h2>どんなやつら？</h2>
                <p>ゲームとかMinecraftのMODとか作ってる学生たちだよ。</p>
                <h2>で、具体的にどんなゲーム作ってんの？</h2>
                <p>主に2Dのドット絵RPGを作ってるよ。<br />でも未だ完成には至ってないんだ。</p>
                <h2>ところでナミウチグラードって何？</h2>
                <p>ある砂漠でかつて栄えた文明の力を使いまくって出来た海上都市。<br />パラレルワールドに存在し、時空が少し捻じ曲がっている。<br />向こうの方が10年進んでいる。<br />NGRIはその都市の地下に存在する研究所。</p>
                <h2>おぉ、なんか面白そう！</h2>
                <p>Discordのファンサーバーに参加すれば最新情報がいち早くGET出来るぞ！<br />しかも熱狂的ファンと認められればゲーム制作にアイデアマンとして参加することも出来るぞ！<br /><a href="https://discord.gg/2Q9vh2PQSX">今すぐ参加！</a></p>
            </main>
            <Footer />
        </div>
    );
}

