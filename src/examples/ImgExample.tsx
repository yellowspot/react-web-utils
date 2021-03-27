import { FC } from 'react';

import { Img } from "../lib/index";
import placeholder from '../assets/logo192.png';

export const ImgExample: FC = () => {
  return (
    <div>
      <h2>When src exists</h2>
      <Img
        src="https://www.yellowspot.dev/static/images/logo-yellow.png"
        fallback={placeholder}
        alt="logo"
        height="80"
      />
      <br />
      <h2>When src do not exists</h2>
      <Img
        src="https://www.yellowspot.dev/static/images/not-found.png"
        fallback={placeholder}
        alt="logo"
        height="80"
      />
    </div>
  );
};
