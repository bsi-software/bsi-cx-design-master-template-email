const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-ratio-2-1/prototype');
const {contentElements} = require('@bsi-cx/design-standard-library-email/content-elements/base');
const {colTwoSlimElements} = require('../../base');
const {colTwoWideElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-two-ratio-1-2-v52yUl',
  /*'2 Columns',*/
  '2 Spalten',
  /*'ratio 1:2',*/
  'Verhältnis 1:2',
  'col-two-ratio-1-2-dropzone-1-7yehp5',
  'col-two-ratio-1-2-dropzone-2-zcjnWE',
  [...contentElements, ...colTwoSlimElements],
  [...contentElements, ...colTwoWideElements]
);