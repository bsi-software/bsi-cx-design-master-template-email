const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-dark-footer/prototype');
const {footerLayoutElements} = require('../../layout');

module.exports = contentElement(
  require('./template.twig'),
  'layout-light-footer-lczK9u',
  'Layout light',
  'layout-light-footer-dropzone-owgFvm',
  [...footerLayoutElements]
);