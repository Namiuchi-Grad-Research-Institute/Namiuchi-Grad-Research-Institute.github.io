'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { role2str } from '../../lib/MemberData';

type Member_t = {
    birthday: string,
    gender: [string, string, string],
    name: string,
    role: string[],
    ruby: string,
    sp: string
};

type Props = {
    member: Member_t
};

interface Params extends ParsedUrlQuery {
    name: string
}

export default function Member({ member }: Props): JSX.Element {
    const birthday: string = member.birthday === null ? '不明/非公開' : `${member.birthday.split('-')[0]}/${member.birthday.split('-')[1]}/${member.birthday.split('-')[2]}`;
    return (
        <div id="l-container">
            <Head>
                <title>{member.name} - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">{member.ruby === null ? member.name : <ruby>{member.name}<rt>{member.ruby}</rt></ruby>}</h1>
                {/* eslint-disable-next-line no-restricted-properties */}
                <p>性別：女{member.gender[0].substring(1)}% 男{member.gender[1].substring(1)}% ({getGenderString(member.gender[2])})</p>
                <p>誕生日(Y/M/D)：{birthday}</p>
                <p>役職：{role2str(member.role)}</p>
                <p>自己紹介：{member.sp}</p>
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
    const res: Response = await fetch('https://forum.ngri.jp/api/member/getdata/?name=all');
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
    const members: Member_t[] = await res.json();
    const paths: string[] = members.map((member: Member_t) => `/member/${member.name}`);
    return { fallback: false, paths };
}

export async function getStaticProps(ctx: GetStaticPropsContext<Params, false>): Promise<GetStaticPropsResult<Props>> {
    const res: Response = await fetch(`https://forum.ngri.jp/api/member/getdata/?name=${ctx.params!.name}`);
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
    const member: Member_t = await res.json();
    return { props: { member } };
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
        default:
            break;
    }
    return '？(取得エラー)';
}
