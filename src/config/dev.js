'use strict';

import baseConfig from './base';

let config = {
  NODE_ENV: 'dev'  // feel free to remove the NODE_ENV property here
};

export default Object.freeze(Object.assign({}, baseConfig, config));
