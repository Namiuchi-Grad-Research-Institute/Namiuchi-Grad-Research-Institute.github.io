/** @jsxImportSource @emotion/react */

import cn from 'classnames';
import { css } from '@emotion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useRef } from 'react';

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined] as const;
const VALID_LAYOUT_VALUES = ['fill', 'responsive', undefined] as const;

type LoadingValue = typeof VALID_LOADING_VALUES[number];

type ImgElementStyle = NonNullable<JSX.IntrinsicElements['img']['style']>;

type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

export type ImageProps = Omit<JSX.IntrinsicElements['img'], 'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading' | 'style'> & { loading?: LoadingValue, objectFit?: ImgElementStyle['objectFit'], objectPosition?: ImgElementStyle['objectPosition'], priority?: boolean } & (StringImageProps | ObjectImageProps);

type StringImageProps = { src: string } & (| { width?: never; height?: never; layout: 'fill' } | { layout?: Exclude<LayoutValue, 'fill'>, height: number | string, width: number | string });

interface StaticImageData {
    blurDataURL?: string;
    height: number;
    src: string;
    width: number;
}

interface StaticRequire {
    default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;

type ObjectImageProps = {
    // blurDataURL?: never;
    height?: number | string;
    layout?: LayoutValue;
    // placeholder?: PlaceholderValue;
    src: StaticImport;
    width?: number | string;
}

function getInt(x: unknown): number | undefined {
    if(typeof x === 'number') return x;
    if(typeof x === 'string') return parseInt(x, 10);
    return undefined;
}

export const Image = ({ className, height, layout, loading, objectFit, objectPosition, sizes, src, width, ...all }: ImageProps): JSX.Element => {
    const rest: Partial<ImageProps> = all;
    const widthInt = getInt(width);
    const heightInt = getInt(height);
    let sizerStyle: JSX.IntrinsicElements['div']['style'] | undefined;
    const imgStyle: ImgElementStyle | undefined = {
        objectFit,
        objectPosition
    };
    if(typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
        const quotient = heightInt / widthInt;
        const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;
        sizerStyle = { boxSizing: 'border-box', display: 'block', paddingTop };
    }
    const isLazy = loading === 'lazy' || typeof loading === 'undefined';
    const webp = require(`../../../public${src}?resize&format=webp`);
    const img = require(`../../../public${src}`);
    const ref = useRef<HTMLImageElement | null>(null);
    const entry = useIntersectionObserver(ref, {
        freezeOnceVisible: true,
        rootMargin: '200px'
    });
    const isVisible = !isLazy || !!entry?.isIntersecting;
    let imgAttributes = {
        height,
        src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        srcSet: '',
        width
    };
    let webpImgAttributes = {
        srcSet: ''
    };
    if(isVisible) {
        imgAttributes = {
            ...imgAttributes,
            src: img
        };
        webpImgAttributes = {
            srcSet: webp.srcSet
        };
    }
    return (
        <div css={style.wrap} className={cn({ responsive: layout !== 'fill', fill: layout === 'fill' })}>
            {sizerStyle && <div style={sizerStyle} />}
            <picture css={style.picture}>
                <source {...webpImgAttributes} type="image/webp" />
                <img {...rest} {...imgAttributes} decoding="async" alt="" className={className} ref={ref} style={imgStyle} css={style.img} />
            </picture>
        </div>
    );
};

const style = {
    img: css`border:none;bottom:0;box-sizing:border-box;display:block;height:0;left:0;margin:auto;max-height:100%;max-width:100%;min-height:100%;min-width:100%;position:absolute;right:0;top:0;width:0`,
    picture: css`border:none;bottom:0;box-sizing:border-box;display:block;height:100%;left:0;margin:auto;max-height:100%;max-width:100%;min-height:100%;min-width:100%;padding:0;position:absolute;right:0;top:0;width:100%`,
    wrap: css`&.responsive{box-sizing:border-box;display:block;margin:0;overflow:hidden;position:relative}&.fill{bottom:0;box-sizing:border-box;display:block;left:0;margin:0;overflow:hidden;position:absolute;right:0;top:0}`
};
