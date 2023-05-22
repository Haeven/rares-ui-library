import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { SkeletonLoader } from '../SkeletonLoader';

const defaultImageWidths = [160, 320, 640, 960, 1280, 1600, 1920, 2560];

// Reasonable default sizes given the above widths
const defaultSizes = [
  '(max-width: 320px) 100vw',
  '(max-width: 640px) 85vw',
  '(max-width: 960px) 70vw',
  '(max-width: 1280px) 60vw',
  '(max-width: 1600px) 60vw',
  '(min-width: 1920px) 60vw',
].join(', ');

const allowedDomains = [
  'rares.io',
  'dev.rares.io',
  'media.rares.io',
  'cdn.rares.io',
  's3.us-west-1.amazonaws.com',
];

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
  // Passed directly to the img "sizes" attribute
  // If not provided, a default is used
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: number;

  // This provides a way to override the default widths used for srcSet
  // Typically, you should not need to use this
  overrideImageWidths?: number[];
};

const getCdnUrl = () => 'https://rares.io';

const getOptimizedUrl = (url: string, width: number, height?: number) => {
  if (height) {
    return `${getCdnUrl()}/cdn-cgi/image/format=auto,fit=cover,width=${width},height=${height}/${url}`;
  }

  return `${getCdnUrl()}/cdn-cgi/image/format=auto,fit=contain,width=${width}/${url}`;
};

const getScaledUrl = (url: string, scale: number) =>
  `${getCdnUrl()}/cdn-cgi/image/format=auto,fit=contain,dpr=${scale}/${url}`;

/**
 * Custom Rares Image component that performs automatic image optimization
 */
export const ResponsiveImage: FCWithChildren<ImageProps> = ({
  src,
  alt,
  overrideImageWidths,
  aspectRatio,
  ...rest
}) => {
  const isResizable = useMemo(() => {
    if (src) {
      return (
        src.startsWith('/') ||
        allowedDomains.some((d) => new URL(src)?.host?.includes(d))
      );
    }
    return false;
  }, [src]);

  const [imageLoaded, setImageLoaded] = useState(false);

  const widths = overrideImageWidths || defaultImageWidths;
  const srcset = useMemo(
    () =>
      widths
        .map((w) => {
          const height = aspectRatio ? Math.round(w / aspectRatio) : undefined;
          return `${getOptimizedUrl(src, w, height)} ${w}w`;
        })
        .join(', '),
    [widths, src, aspectRatio],
  );
  const sizes = rest.sizes || defaultSizes;

  if (!isResizable) {
    return <img src={src} alt={alt} {...rest} />;
  }

  return (
    <>
      <img
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        style={{
          display: imageLoaded ? 'block' : 'none',
        }}
        {...rest}
      />
      {!imageLoaded && <SkeletonLoader />}
    </>
  );
};

export const useResponsiveImageSet = ({ src }: { src: string }) => {
  const isResizable = useMemo(
    () =>
      src.startsWith('/') ||
      allowedDomains.some((d) => new URL(src)?.host?.includes(d)),
    [src],
  );

  const imageSet = useMemo(
    () => `image-set(
      url(${getScaledUrl(src, 1)}) 1x,
      url(${getScaledUrl(src, 2)}) 2x
    )`,
    [src],
  );

  if (!isResizable) {
    return null;
  }

  return imageSet;
};

type BackgroundProps = React.ComponentPropsWithoutRef<'div'> & {
  src: string;
};

export const ResponsiveBackground: FCWithChildren<BackgroundProps> = ({
  src,
  ...props
}) => {
  const imageSet = useResponsiveImageSet({ src });

  return <ImageSetDiv {...props} imageSet={imageSet} src={src} />;
};

interface ImageSetDivProps extends BackgroundProps {
  imageSet: string | null;
}

const ImageSetDiv = styled.div<ImageSetDivProps>`
  background-image: url(${(props) => props.src});
  background-image: -webkit-${(props) => props.imageSet};
  background-image: ${(props) => props.imageSet};
`;
