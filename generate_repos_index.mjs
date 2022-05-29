#!/usr/bin/env node
'use strict';

import { execSync } from 'child_process';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';

/**
 * @param {string} path
 * @param {number} id
 * @return {void}
 */
function index(path, id) {
    /** @type {string} */ let ROOT = '..';
    /** @type {number} */ const depth = (path.match(/\//g) || []).length;
    for(let i = 0; i < depth; i++) ROOT += '/..';
    /** @type {string} */ const DIR = path.replace(/public\//, '');
    /** @type {string} */ let FILELIST = `<tr><td valign="top"><i className="bi bi-arrow-90deg-up"></i></td><td><Link href="/${DIR.split('/').filter((v, i, a) => i !== a.length - 1).join('/')}"><a>Parent Directory</a></Link></td></tr>`;
    readdirSync(path).forEach(f => {
        if(statSync(`${path}/${f}`).isDirectory()) {
            FILELIST += `<tr><td valign="top"><i className="bi bi-folder2"></i></td><td><Link href="/${DIR}/${f}/"><a>${f}/</a></Link></td></tr>`;
            return;
        }
        switch(true) {
            case f.endsWith('.7z'):
            case f.endsWith('.bz'):
            case f.endsWith('.bz2'):
            case f.endsWith('.cab'):
            case f.endsWith('.gz'):
            case f.endsWith('.jar'):
            case f.endsWith('.lha'):
            case f.endsWith('.lzh'):
            case f.endsWith('.lzma'):
            case f.endsWith('.rar'):
            case f.endsWith('.taz'):
            case f.endsWith('.tbz'):
            case f.endsWith('.tgz'):
            case f.endsWith('.txz'):
            case f.endsWith('.xz'):
            case f.endsWith('.z'):
            case f.endsWith('.zip'):
            case f.endsWith('.zstd'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-zip"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.a'):
            case f.endsWith('.bin'):
            case f.endsWith('.bundle'):
            case f.endsWith('.class'):
            case f.endsWith('.dat'):
            case f.endsWith('.dll'):
            case f.endsWith('.dylib'):
            case f.endsWith('.hex'):
            case f.endsWith('.lib'):
            case f.endsWith('.msi'):
            case f.endsWith('.run'):
            case f.endsWith('.so'):
            case f.endsWith('.x64'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-binary"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.aac'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-aac"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.ai'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-ai"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.apng'):
            case f.endsWith('.avif'):
            case f.endsWith('.heif'):
            case f.endsWith('.jfif'):
            case f.endsWith('.jpeg'):
            case f.endsWith('.pjp'):
            case f.endsWith('.pjpeg'):
            case f.endsWith('.webp'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-image"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.avi'):
            case f.endsWith('.h264'):
            case f.endsWith('.h265'):
            case f.endsWith('.mpeg'):
            case f.endsWith('.webm'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-play"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.bmp'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-bmp"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.c'):
            case f.endsWith('.cc'):
            case f.endsWith('.cgi'):
            case f.endsWith('.cpp'):
            case f.endsWith('.htm'):
            case f.endsWith('.l'):
            case f.endsWith('.pl'):
            case f.endsWith('.shtm'):
            case f.endsWith('.shtml'):
            case f.endsWith('.toml'):
            case f.endsWith('.ts'):
            case f.endsWith('.vb'):
            case f.endsWith('.vbs'):
            case f.endsWith('.xhtm'):
            case f.endsWith('.xhtml'):
            case f.endsWith('.y'):
            case f.endsWith('.yaml'):
            case f === 'Makefile':
            case f === 'configure':
            case f === 'makefile':
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-code"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.cfg'):
            case f.endsWith('.conf'):
            case f === 'AUTHORS':
            case f === 'COPYING':
            case f === 'ChangeLog':
            case f === 'INSTALL':
            case f === 'LICENSE':
            case f === 'NEWS':
            case f === 'README':
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-text"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.cs'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-cs"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.css'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-css"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.csv'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-csv"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.diff'):
            case f.endsWith('.patch'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-diff"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.doc'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-doc"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.docm'):
            case f.endsWith('.dot'):
            case f.endsWith('.dotm'):
            case f.endsWith('.dotx'):
            case f.endsWith('.odt'):
            case f.endsWith('.rtf'):
            case f.endsWith('.wpd'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-richtext"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.docx'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-docx"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.eot'):
            case f.endsWith('.otc'):
            case f.endsWith('.otf'):
            case f.endsWith('.ttc'):
            case f.endsWith('.woff2'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-font"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.exe'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-exe"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.gif'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-gif"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.hdi'):
            case f.endsWith('.vhd'):
            case f.endsWith('.vhdx'):
            case f.endsWith('.vmdk'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-hdd"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.heic'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-heic"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.html'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-html"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.iso'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-disc"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.java'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-java"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.jpg'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-jpg"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.js'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-js"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.json'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-json"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.jsx'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-jsx"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.key'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-key"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.m4p'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-m4p"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.md'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-md"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.mdx'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-mdx"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.mid'):
            case f.endsWith('.midi'):
            case f.endsWith('.ogg'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-music"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.mov'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-mov"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.mp3'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-mp3"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.mp4'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-mp4"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.odp'):
            case f.endsWith('.pot'):
            case f.endsWith('.potm'):
            case f.endsWith('.potx'):
            case f.endsWith('.ppa'):
            case f.endsWith('.ppam'):
            case f.endsWith('.pps'):
            case f.endsWith('.ppsm'):
            case f.endsWith('.ppsx'):
            case f.endsWith('.pptm'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-slides"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.ods'):
            case f.endsWith('.xjc'):
            case f.endsWith('.xjm'):
            case f.endsWith('.xjs'):
            case f.endsWith('.xjt'):
            case f.endsWith('.xla'):
            case f.endsWith('.xlam'):
            case f.endsWith('.xlb'):
            case f.endsWith('.xlk'):
            case f.endsWith('.xll'):
            case f.endsWith('.xlm'):
            case f.endsWith('.xlsb'):
            case f.endsWith('.xlt'):
            case f.endsWith('.xltm'):
            case f.endsWith('.xltx'):
            case f.endsWith('.xlw'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark-spreadsheet"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.otf'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-otf"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.pdf'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-pdf"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.php'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-php"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.png'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-png"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.ppt'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-ppt"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.pptx'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-pptx"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.psd'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-psd"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.py'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-py"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.raw'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-raw"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.rb'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-rb"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.sass'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-sass"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.scss'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-scss"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.sh'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-sh"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.svg'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-svg"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.tar'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-archive"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.tiff'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-tiff"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.tsx'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-tsx"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.ttf'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-ttf"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.txt'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-txt"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.url'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-globe"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.wav'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-wav"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.woff'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-woff"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.xls'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-xls"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.xlsx'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-xlsx"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.xml'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-xml"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            case f.endsWith('.yml'):
                FILELIST += `<tr><td valign="top"><i className="bi bi-filetype-yml"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
            default:
                FILELIST += `<tr><td valign="top"><i className="bi bi-file-earmark"></i></td><td><Link href="/${DIR}/${f}"><a>${f}</a></Link></td></tr>`;
                return;
        }
    });
    /** @type {string} */ const TMPL = readFileSync('repos_idx_tmpl.txt').toString().replace(/\$\{ROOT\}/g, ROOT).replace(/\$\{DIR\}/g, DIR).replace(/\$\{NAME\}/g, `${id}`).replace(/\$\{FILELIST\}/g, FILELIST);
    writeFileSync(`pages/${DIR}/index.tsx`, TMPL);
}

/** @type {number} */let i = 0;

execSync('find public/repos -type d').toString().split('\n').forEach(d => {
    if(d === '') return;
    execSync(`mkdir -p pages/${d.replace(/public\//g, '')}`);
    index(d, i++);
});

export {};
