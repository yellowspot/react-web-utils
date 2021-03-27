import { render } from '@testing-library/react';

import { Img } from './index';

it('renders without crashing', () => {
  const { container } = render(<Img src="some_url" />);

  expect(container.querySelector('Img')).toBeTruthy();
});
