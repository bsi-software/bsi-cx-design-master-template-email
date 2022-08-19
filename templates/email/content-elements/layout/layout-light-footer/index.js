const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-dark-footer/prototype');
const {spacerElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'layout-light-footer-lczK9u',
  /*'Layout light',*/
  'Helles Layout',
  'layout-light-footer-dropzone-owgFvm',
  [
    require('@bsi-cx/design-standard-library-email/content-elements/base/text'),
    require('@bsi-cx/design-standard-library-email/content-elements/layout/col-one-footer'),
    require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-footer'),
    require('@bsi-cx/design-standard-library-email/content-elements/base/divider'),
    require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
    ...spacerElements]
);