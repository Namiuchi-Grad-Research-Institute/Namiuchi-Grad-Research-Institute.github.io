'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import useSWR from 'swr';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Image } from '../../components/Image';
import { role2str } from '../../lib/MemberData';
import { NextRouter, useRouter } from 'next/router';
import { resolveDynamicRoute } from '../../lib/Route';
import { useEffect, useState } from 'react';

export default function Member(): JSX.Element {
    const [resolvedRoute, setResolvedRoute] = useState(undefined);
    const router: NextRouter = useRouter();
    const { name } = router.query;
    const { member, err } = useSWR(`https://forum.ngri.jp/api/member/getdata/?name=${name}`, (...args) => fetch(...args).then(res => res.json()));
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


