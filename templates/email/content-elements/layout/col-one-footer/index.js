const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-one-footer/prototype');
const {footerElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-one-footer-68T94f',
  '1 Column',
  'col-one-footer-dropzone-jaZSq2',
  [...footerElements]
);