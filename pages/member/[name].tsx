'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/Header';
import { Image } from '../../components/Image';
import { role2str } from '../../lib/MemberData';

type Props = {
    member: {
        birthday: string,
        gender: string[],
        name: string,
        role: string[]
    }
};

export default function Member({ member }: Props): JSX.Element {
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

export async function getStaticPaths() {
    const res = await fetch('https://forum.ngri.jp/api/member/getdata/?name=all');
    const members = await res.json();
    const paths = members.map(member => `/member/${member.name}`);
    return { fallback: false, paths };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://forum.ngri.jp/api/member/getdata/?name=${params.name}`);
    const member = await res.json();
    return { props: { member } };
}

