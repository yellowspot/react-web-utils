# @yellowspot/web-utils

# npm
[@yellowspot/web-utils](https://www.npmjs.com/package/@yellowspot/web-utils)

# Components

## Image with fallback/placeholder

```jsx
import { Img } from '@yellowspot/web-utils';

import placeholder from './placeholder.png';

...

<ImageWithFallback
  src="https://some.image.png"
  fallback={placeholder}
  alt="logo"
  height="140"
  //...others img valid props
/>
```

## Development

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the sample app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the library for production to the `dist` folder.\
