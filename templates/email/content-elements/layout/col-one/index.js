const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-one/prototype');
const {colOneElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-one-DMfkNr',
  '1 Column',
  'col-one-dropzone-GYTnrx',
  [...colOneElements]
);