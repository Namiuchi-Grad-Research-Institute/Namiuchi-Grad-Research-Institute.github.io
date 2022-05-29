'use strict';

export function role2str(role: string[]): string {
    let str = '社員';
    role.forEach(e => {
        switch(e) {
            case 'design2d':
                str += '・2Dデザイナー';
                break;
            case 'design3d':
                str += '・3Dデザイナー';
                break;
            case 'dot2d':
                str += '・2Dドット絵師';
                break;
            case 'dot3d':
                str += '・3Dドット絵師';
                break;
            case 'manage':
                str += '・総務部';
                break;
            case 'soft':
                str += '・ソフトウェアエンジニア';
                break;
            case 'trans':
                str += '・翻訳者';
                break;
            case 'webback':
                str += '・バックエンドエンジニア';
                break;
            case 'webfront':
                str += '・フロントエンドエンジニア';
                break;
            default:
                str += `・内部名${e}は適切なロールではありません。`;
                break;
        }
    });
    return str;
}

