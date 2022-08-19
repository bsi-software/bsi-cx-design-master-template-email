const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-base/prototype');
const {spacerElements} = require('../../base');

module.exports = contentElement(
  require('./template.twig'),
  'layout-colored-HloCP4',
  /*'Layout with background color',*/
  'Farbiges Layout',
  'layout-colored-dropzone-sIYAux',
  [
    require('@bsi-cx/design-standard-library-email/content-elements/layout/col-one'),
    require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two'),
    require('../col-two-ratio-1-2'),
    require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-ratio-2-1'),
    require('@bsi-cx/design-standard-library-email/content-elements/layout/col-three'),
    require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
    require('@bsi-cx/design-standard-library-email/content-elements/base/divider'),
    ...spacerElements]
);