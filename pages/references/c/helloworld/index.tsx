'use strict';

import Footer from '../../../components/Footer';
import Head from 'next/head';
import Header from '../../../components/Header';
import Link from 'next/link';

export default function ReferenceCHelloWorld(): JSX.Element {
    return (
        <div id="l-container">
            <Head>
                <title>Hello world - C言語・C++リファレンス - NGRI</title>
            </Head>
            <Header />
            <main id="l-main">
                <h1 className="title">Hello world</h1>
                <p><Link href="/references/c/"><a>C言語・C++リファレンスに戻る</a></Link></p>
                <p>入門用プログラムの王道、Hello worldをC言語とC++で書き、軽く解説します。</p>
                <pre>
                    <code>
                        // C言語
                        #include &lt;stdio.h&gt;

                        int main(void) {
                            printf(&quot;Hello world!\n&quot;);
                            return 0;
                        }
                    </code>
                </pre>
                <pre>
                    <code>
                        // C++
                        #include &lt;iostream&gt;

                        int main(void) {
                            std::cout << &quot;Hello world!&quot; << std::endl;
                            return 0;
                        }
                    </code>
                </pre>
                <h2>C言語版解説</h2>
                <ul>
                    <li>
                        <pre><code>#include &lt;stdio.h&gt;</code></pre>
                        <p>簡単に言えば後述する<pre><code>printf</code></pre>関数を使えるようにするための設定ファイルみたいな物を読み込む感じ。</p>
                    </li>
                    <li>
                        <pre><code>int main(void)</code></pre>
                        <p>それぞれ、整数を返す・プログラムのスタート地点・引数が無い事を表す。</p>
                        <p>これは<pre><code>main</code></pre>関数という関数を定義していることを示し、この関数は必ず一番最初に呼び出される。</p>
                        <p>「整数を返す」については後述。</p>
                        <p>引数は関数を呼び出す際に与えられるデータの事で、今回は特に使わない為<pre><code>void</code></pre>と書き引数が無い事を示したが、実行時の引数をプログラム内で使う場合、<pre><code>int main(int argc, char **argv)</code></pre>と書くことにより使用可能となる。</p>
                    </li>
                    <li>
                        <pre><code>{～}</code></pre>
                        <p>囲まれた部分が一つのまとまりである事を表す。</p>
                        <p>この場合、main関数の内容を囲っている。</p>
                    </li>
                    <li>
                        <pre><code>printf(～)</code></pre>
                        <p>大雑把に言えば文字列を表示する関数。</p>
                    </li>
                    <li>
                        <pre><code>&quot;Hello world!\n&quot;</code></pre>
                        <p><pre><code>Hello world!</code></pre>という文字列と改行を表す。</p>
                        <p><pre><code>&quot;～&quot;</code></pre>は文字列を表す。</p>
                    </li>
                    <li>
                        <pre><code>;</code></pre>
                        <p>一つの文の終端を表す。</p>
                        <p>言ってみれば日本語の句点「。」、英語のピリオド「.」みたいな物。</p>
                    </li>
                    <li>
                        <pre><code>return 0;</code></pre>
                        <p>0を返し関数を終了する事を表す。</p>
                        <p>0は成功を表し、0以外はエラーなどを表す事になっている。</p>
                    </li>
                </ul>
                <h2>C++版解説(C言語版と重なる部分は省略する)</h2>
                <ul>
                    <li>
                        <pre><code>#include &lt;iostream&gt;</code></pre>
                        <p>簡単に言えば後述する<pre><code>std::～</code></pre>を使えるようにするための設定ファイルみたいな物を読み込む感じ。</p>
                    </li>
                    <li>
                        <pre><code>std::cout << &quot;Hello world&quot; << std::endl;</code></pre>
                        <p><pre><code>std::cout</code></pre>はコンソール画面を表す。</p>
                        <p><pre><code>std::endl</code></pre>は行の終端を表す。(簡単に言えば改行する)</p>
                    </li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

