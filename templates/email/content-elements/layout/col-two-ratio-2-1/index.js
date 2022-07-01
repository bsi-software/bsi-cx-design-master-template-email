const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-ratio-2-1/prototype');
const {colTwoSlimElements, colTwoWideElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-two-ratio-2-1-b694Yt',
  '2 Column',
  'ratio 2:1',
  'col-two-ratio-2-1-dropzone-1-7xstGU',
  'col-two-ratio-2-1-dropzone-2-N4gT0V',
  [...colTwoWideElements],
  [...colTwoSlimElements]
);