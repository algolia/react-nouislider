**This project is not well maintained, have a look at other natives react sliders: https://www.google.com/search?q=react+slider**

# react-nouislider

Wraps [leongersen/noUiSlider](https://github.com/leongersen/noUiSlider) in a [react component](https://facebook.github.io/react/docs/component-api.html).

## New features

There are no added features in react-nouislider compared to the underlying noUiSlider project. If you need more features
please direct them to the https://github.com/leongersen/noUiSlider repository.

## Documentation

All the options used in react-nouislider are then passed to noUiSlider. See the [noUiSlider documentation](http://refreshless.com/nouislider/) before opening issues.

## Usage

```sh
npm install react-nouislider --save
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Nouislider from 'react-nouislider';

ReactDOM.render(
  <Nouislider
    range={{min: 0, max: 200}}
    start={[0, 100]}
    tooltips
  />, document.querySelector('#container')
);
```

## Development workflow

```sh
npm install
npm run dev
```
