# react-nouislider

Wraps [leongersen/noUiSlider](https://github.com/leongersen/noUiSlider) in a [react component](https://facebook.github.io/react/docs/component-api.html).

Currently using [Algolia's fork](https://github.com/algolia/noUiSlider) of noUiSlider to allow setting ranges dynamically and other fixes to be merged in upstream project.

## Usage

```sh
npm install react-nouislider --save
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Nouislider from 'Nouislider';

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
