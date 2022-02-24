'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { Image } from '../../components/Image';
import { ParsedUrlQuery } from 'querystring';
import { role2str } from '../../lib/MemberData';

type Member = {
    birthday: string,
    gender: string[],
    name: string,
    role: string[]
};

type Props = {
    member: Member
};

interface Params extends ParsedUrlQuery {
    name: string
}

export default function Member({ member }: Props): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>{member.name} - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">{member.name}</h1>
                <p>性別：女{member.gender[0].substring(1)}% 男{member.gender[1].substring(1)}%</p>
                <p>誕生日(Y/M/D)：{member.birthday.split('-')[0]}/{member.birthday.split('-')[1]}/{member.birthday.split('-')[2]}</p>
                <p>役職：{role2str(member.role)}</p>
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
    const res: Response = await fetch('https://forum.ngri.jp/api/member/getdata/?name=all');
    const members: Member[] = await res.json();
    const paths: string[] = members.map((member: Member) => `/member/${member.name}`);
    return { fallback: false, paths };
}

export async function getStaticProps(ctx: GetStaticPropsContext<Params, false>): Promise<GetStaticPropsResult<Props>> {
    const res: Response = await fetch(`https://forum.ngri.jp/api/member/getdata/?name=${ctx.params!.name}`);
    const member: Member = await res.json();
    return { props: { member } };
}

