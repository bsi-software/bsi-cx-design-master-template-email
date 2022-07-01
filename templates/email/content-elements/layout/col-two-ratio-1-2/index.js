const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-ratio-1-2/prototype');
const {colTwoSlimElements, colTwoWideElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-two-ratio-1-2-v52yUl',
  '2 Column',
  'ratio 1:2',
  'col-two-ratio-1-2-dropzone-1-7yehp5',
  'col-two-ratio-1-2-dropzone-2-zcjnWE',
  [...colTwoSlimElements],
  [...colTwoWideElements]
);