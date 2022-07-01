const contentElements = [
  require('@bsi-cx/design-standard-library-email/content-elements/base/title-h1'),
  require('./title-h2'),
  require('./title-h3'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/text'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/cta'),
  require('./cta-center'),
  require('./cta-right'),
  require('./highlighted-content'),
  require('./spacer-small'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
  require('./spacer-large'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/divider')
];

const colOneElements = [
  ...contentElements,
  require('@bsi-cx/design-standard-library-email/content-elements/base/image'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/table'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/news-snippet'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/smiley-rating'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/event')
];

const colTwoElements = [
  ...contentElements,
  require('./img-50')
];

const colTwoSlimElements = [
  ...contentElements,
  require('./img-33')
];

const colTwoWideElements = [
  ...contentElements,
  require('./img-66')
];

const colThreeElements = [
  ...contentElements,
  require('./img-33')
];

const footerElements = [
  require('@bsi-cx/design-standard-library-email/content-elements/base/footer-link'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/social-media-follow'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/text'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/divider'),
  require('./spacer-small'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
  require('./spacer-large')
];

module.exports.contentElements = contentElements;
module.exports.colOneElements = colOneElements;
module.exports.colTwoElements = colTwoElements;
module.exports.colTwoSlimElements = colTwoSlimElements;
module.exports.colTwoWideElements = colTwoWideElements;
module.exports.colThreeElements = colThreeElements;
module.exports.footerElements = footerElements;