import React from 'react';
import ReactDOM from 'react-dom';

import Nouislider from '../index.js';

ReactDOM.render(
  <Nouislider
    pips={{
      mode: 'range',
      density: 3
    }}
    range={{min: 0, max: 200}}
    start={[0, 100]}
    tooltips
  />,
  document.querySelector('#container')
);
