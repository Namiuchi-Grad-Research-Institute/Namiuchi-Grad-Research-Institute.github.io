/* eslint-disable @next/next/no-img-element */
'use strict';

import Link from 'next/link';
import styles from '../styles/modules/Header.module.scss';

export default function Header(): JSX.Element {
    return (
        <header id="l-header">
            <div className={styles['header-logo']}>
                <img className={styles['logo-img']} src="https://forum.ngri.jp/res/logo-with-NGRI.png" alt="NGRIロゴ" />
            </div>
            <nav id="l-navi">
                <ul className="navi-list">
                    <Link href="/"><a><li>Home</li></a></Link>
                    <Link href="/about/"><a><li>About</li></a></Link>
                    <Link href="/references/"><a><li>References</li></a></Link>
                    <a href="https://forum.ngri.jp/forum/"><li>Forum</li></a>
                    <a href="https://w.atwiki.jp/ngri/"><li>Wiki</li></a>
                </ul>
            </nav>
        </header>
    );
}

