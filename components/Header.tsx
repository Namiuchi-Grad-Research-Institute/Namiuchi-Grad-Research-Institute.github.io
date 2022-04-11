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
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><a href="https://forum.ngri.jp/forum/">Forum</a></li>
                    <li><a href="https://w.atwiki.jp/ngri/">Wiki</a></li>
                </ul>
            </nav>
        </header>
    );
}

