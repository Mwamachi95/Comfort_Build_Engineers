import React from 'react';

interface Picture {
  img: {
    src: string;
    w: number;
    h: number;
  };
  sources: {
    [key: string]: Array<{
      src: string;
      w: number;
      h: number;
    }>;
  };
}

interface OptimizedImageProps {
  picture: Picture;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

/**
 * OptimizedImage Component
 *
 * Renders a picture element with WebP and fallback images.
 * Automatically generates srcsets for responsive images.
 *
 * Usage:
 * import heroImage from '../assets/images/hero.jpg?hero'
 * <OptimizedImage picture={heroImage} alt="Hero image" loading="eager" />
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  picture,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw'
}) => {
  // Generate srcset from sources
  const generateSrcSet = (sources: Array<{ src: string; w: number; h: number }>) => {
    return sources.map(source => `${source.src} ${source.w}w`).join(', ');
  };

  return (
    <picture>
      {/* WebP sources */}
      {picture.sources['image/webp'] && (
        <source
          type="image/webp"
          srcSet={generateSrcSet(picture.sources['image/webp'])}
          sizes={sizes}
        />
      )}

      {/* JPEG fallback */}
      {picture.sources['image/jpeg'] && (
        <source
          type="image/jpeg"
          srcSet={generateSrcSet(picture.sources['image/jpeg'])}
          sizes={sizes}
        />
      )}

      {/* Fallback img element */}
      <img
        src={picture.img.src}
        alt={alt}
        className={className}
        loading={loading}
        width={picture.img.w}
        height={picture.img.h}
      />
    </picture>
  );
};

export default OptimizedImage;
