import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import ImageWithFallback from './lib/ImageWithFallback';
import placeholder from './assets/logo192.png';

const ImgExample: FC = () => {
  return (
    <div>
      <h2>When src exists</h2>
      <ImageWithFallback
        src="https://www.yellowspot.dev/static/images/logo-yellow.png"
        fallback={placeholder}
        alt="logo"
        height="80"
      />
      <br />
      <h2>When src do not exists</h2>
      <ImageWithFallback
        src="https://www.yellowspot.dev/static/images/not-found.png"
        fallback={placeholder}
        alt="logo"
        height="80"
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ImgExample />
  </React.StrictMode>,
  document.getElementById('root')
);
