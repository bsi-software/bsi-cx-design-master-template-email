const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-footer/prototype');
const {footerElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'col-two-footer-YrjN4A',
  '2 Columns',
  'col-two-footer-dropzone-1-WJcCmL',
  'col-two-footer-dropzone-2-qCJrba',
  [...footerElements],
  [...footerElements]
);