const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two/prototype');
const {colTwoElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-two-qiB14A',
  '2 Column',
  'col-two-dropzone-1-rRaE9R',
  'col-two-dropzone-2-K1vkFU',
  [...colTwoElements],
  [...colTwoElements]
);