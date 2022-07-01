const contentElement = require('@bsi-cx/design-standard-library-email/content-elements/base/highlighted-content/prototype');

module.exports = contentElement(
  require('./template.twig'),
  'highlighted-content-8lm6Ih',
  'Highlighted content',
  'highlighted-content-dropzone-4HtYBB',
  [
      require('@bsi-cx/design-standard-library-email/content-elements/base/title-h1'),
      require('../title-h2'),
      require('../title-h3'),
      require('@bsi-cx/design-standard-library-email/content-elements/base/text'),
      require('@bsi-cx/design-standard-library-email/content-elements/base/cta'),
      require('../cta-center'),
      require('../cta-right'),
      require('../spacer-small'),
      require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
      require('../spacer-large'),
      require('@bsi-cx/design-standard-library-email/content-elements/base/divider')
  ]
);