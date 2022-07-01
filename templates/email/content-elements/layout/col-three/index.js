const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-three/prototype');
const {colThreeElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-three-P2iWWk',
  '3 Columns',
  'col-three-dropzone-1-mxExhj',
  'col-three-dropzone-2-23ir6r',
  'col-three-dropzone-3-ajc3B6',
  [...colThreeElements],
  [...colThreeElements],
  [...colThreeElements]
);