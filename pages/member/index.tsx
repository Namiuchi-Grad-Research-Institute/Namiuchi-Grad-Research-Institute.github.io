'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import useSWR from 'swr';
import { ParsedUrlQuery } from 'querystring';
import { role2str } from '../../lib/MemberData';
import { useRouter } from 'next/router';

type Member = {
    birthday: string,
    gender: [string, string, string],
    name: string,
    role: string[],
    ruby: string,
    sp: string
};

export default function Member(): JSX.Element {
    const router = useRouter();
    const { id, name } = router.query;
    const queryStr: string = id ? `id=${id}` : `name=${name}`
    const { data: member, error } = useSWR<Member>(`https://forum.ngri.jp/api/member/getdata/?${queryStr}`, async url => {
        const res: Response = await fetch(url);
        return res.json();
    }, {
        revalidateOnFocus,
        revalidateOnReconnect
    });
    if(error) {
        console.error(error);
        return (
            <div id="l-container">
                <Head>
                    <title>メンバー - NGRI</title>
                </Head>
                <Header />
                <main id="l-main">
                    <h1 className="title">メンバー</h1>
                    <p>取得エラーです。</p>
                </main>
                <Footer />
            </div>
        );
    }
    if(!member) return (
        <div id="l-container">
            <Head>
                <title>メンバー - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">メンバー</h1>
                <p>取得中です...</p>
            </main>
            <Footer />
        </div>
    );
    const birthday: string = member.birthday === null ? '不明/非公開' : `${member.birthday.split('-')[0]}/${member.birthday.split('-')[1]}/${member.birthday.split('-')[2]}`;
    return (
        <div id="l-container">
            <Head>
                <title>{member.name} - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">{member.ruby === null ? member.name : <ruby>{member.name}<rt>{member.ruby}</rt></ruby>}</h1>
                <p>性別：女{member.gender[0].substring(1)}% 男{member.gender[1].substring(1)}% ({getGenderString(member.gender[2])})</p>
                <p>誕生日(Y/M/D)：{birthday}</p>
                <p>役職：{role2str(member.role)}</p>
                <p>自己紹介：{member.sp}</p>
            </main>
            <Footer />
        </div>
    );
}

function getGenderString(gender?: string): string {
    switch(gender) {
        case 'A':
            return '無性';
        case 'B':
            return '両性';
        case 'F':
            return '女性';
        case 'M':
            return '男性';
        case 'N':
            return '中性';
        case 'S':
            return '謎';
    }
    return '？(取得エラー)';
}

