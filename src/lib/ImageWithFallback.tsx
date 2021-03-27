import React, { FC, useState, useEffect, ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  placeholder?: string;
}

const ImageWithFallback: FC<Props> = ({
  src,
  fallback,
  placeholder,
  alt,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(fallback || placeholder);

  useEffect(() => {
    if (!src) {
      return;
    }

    const onImgLoad = () => { setImgSrc(img.src); }
    const img = new Image();
    img.src = src;

    img.addEventListener('load', onImgLoad);

    return () => img.removeEventListener('load', onImgLoad);
  }, [src]);

  return <img alt={alt || 'image'} src={imgSrc} {...rest} />;
};

export default ImageWithFallback;
