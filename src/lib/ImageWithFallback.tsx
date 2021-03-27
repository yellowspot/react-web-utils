import React, { FC, useState, useEffect } from 'react';

const ImageWithFallback: FC<any> = (props: any) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(fallback);

  useEffect(() => {
    if (!src) {
      return;
    }

    const img = new Image();
    img.src = src;

    const listener: any = img.addEventListener('load', event => {
      setImgSrc(img.src);
    });

    return () => img.removeEventListener('load', listener);
  }, [src]);

  return <img alt={props.all || ''} src={imgSrc} {...rest} />;
};

export default ImageWithFallback;
