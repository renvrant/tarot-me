/* flow */

import * as mapToJson from 'map.prototype.tojson';

export const polyfills = [
  ...mapToJson // Allows maps to render correctly in redux devtools
];
