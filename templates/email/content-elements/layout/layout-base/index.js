const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-base/prototype');
const {layoutElements} = require('../../layout');

module.exports = contentElement(
  require('./template.twig'),
  'layout-base-dziMWZ',
  'Layout base',
  'layout-base-dropzone-7nPzXF',
  [...layoutElements]
);