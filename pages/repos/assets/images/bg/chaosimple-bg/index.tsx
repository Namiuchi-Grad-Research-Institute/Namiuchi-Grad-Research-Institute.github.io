'use strict';

import Footer from '../../../../../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../../../../styles/modules/Repos.module.scss';

export default function Repos10() {
    return (
        <div id="l-container">
            <Head>
                <title>Repository - NGRI HP</title>
            </Head>
            <main id="l-main">
                <h1 className="title">Index of /repos/assets/images/bg/chaosimple-bg</h1>
                <div className={`content ${styles['repoContents']}`}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td valign="top"><i className="bi bi-arrow-90deg-up"></i></td><td><Link href="/repos/assets/images/bg"><a>Parent Directory</a></Link></td></tr><tr><td valign="top"><i className="bi bi-file-earmark"></i></td><td><Link href="/repos/assets/images/bg/chaosimple-bg/MD5SUMS"><a>MD5SUMS</a></Link></td></tr><tr><td valign="top"><i className="bi bi-file-earmark-zip"></i></td><td><Link href="/repos/assets/images/bg/chaosimple-bg/chaosimple-bg-u_ix.tar.gz"><a>chaosimple-bg-u_ix.tar.gz</a></Link></td></tr><tr><td valign="top"><i className="bi bi-file-earmark"></i></td><td><Link href="/repos/assets/images/bg/chaosimple-bg/chaosimple-bg-u_ix.tar.gz.asc"><a>chaosimple-bg-u_ix.tar.gz.asc</a></Link></td></tr><tr><td valign="top"><i className="bi bi-file-earmark-zip"></i></td><td><Link href="/repos/assets/images/bg/chaosimple-bg/chaosimple-bg-win.zip"><a>chaosimple-bg-win.zip</a></Link></td></tr><tr><td valign="top"><i className="bi bi-file-earmark"></i></td><td><Link href="/repos/assets/images/bg/chaosimple-bg/chaosimple-bg-win.zip.asc"><a>chaosimple-bg-win.zip.asc</a></Link></td></tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}
