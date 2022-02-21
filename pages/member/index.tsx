'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import useSWR from 'swr';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Image } from '../../components/Image';
import { role2str } from '../../lib/MemberData';
import { useRouter } from 'next/router';

export default function Member(): Promise<JSX.Element> {
    const router = useRouter();
    const { pid } = router.query;
    const { member, err }: any = useSWR(`https://forum.ngri.jp/api/member/getdata/?name=${pid}`, fetch);
    if(err) return (
        <div id="l-container">
            <Head>
                <title>メンバー - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">メンバー</h1>
                <p>読み込みに失敗しました。</p>
            </main>
            <Footer />
        </div>
    );
    if(!member) return (
        <div id="l-container">
            <Head>
                <title>メンバー - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">メンバー</h1>
                <p>読み込み中...</p>
            </main>
            <Footer />
        </div>
    );
    return (
        <div id="l-container">
            <Head>
                <title>{member.name} - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">{member.name}</h1>
                <p>性別：女{member.gender[0].substring(1)}% 男{member.gender[0].substring(1)}%</p>
                <p>誕生日：{member.birthday.split('-')[0]}年{member.birthday.split('-')[1]}月{member.birthday.split('-')[2]}日</p>
                <p>役職：{role2str(member.role)}</p>
            </main>
            <Footer />
        </div>
    );
}

