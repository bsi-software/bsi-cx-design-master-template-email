const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-dark-footer/prototype');
const {footerLayoutElements} = require('../../layout');

module.exports = contentElement(
  require('./template.twig'),
  'layout-dark-footer-x1LvCb',
  'Layout dark',
  'layout-dark-footer-dropzone-S2Twva',
  [...footerLayoutElements]
);