'use strict';

import Link from 'next/link';
import { Image } from './Image';

export default function Header(): JSX.Element {
    return (
        <header id="l-header">
            {/*<div className="header-logo">
                <Image src="/logo.png" objectFit="contain" layout="fill" alt="NGRIロゴ" />
            </div>*/}
            <nav id="l-navi">
                <ul className="navi-list">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><a href="https://forum.ngri.jp/forum/">Forum</a></li>
                    <li><a href="https://w.atwiki.jp/ngri/">Wiki</a></li>
                </ul>
            </nav>
        </header>
    );
}

