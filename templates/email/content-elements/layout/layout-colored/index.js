const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-base/prototype');
const {layoutElements} = require('../../layout');

module.exports = contentElement(
  require('./template.twig'),
  'layout-colored-HloCP4',
  'Layout with background color',
  'layout-colored-dropzone-sIYAux',
  [...layoutElements]
);