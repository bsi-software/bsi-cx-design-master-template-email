const layoutElements = [
  require('./col-one'),
  require('./col-two'),
  require('./col-two-ratio-1-2'),
  require('./col-two-ratio-2-1'),
  require('./col-three'),
  require('../base/spacer-small'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
  require('../base/spacer-large'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/divider')
];

const footerLayoutElements = [
  require('./col-one-footer'),
  require('./col-two-footer'),
  require('../base/spacer-small'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
  require('../base/spacer-large'),
  require('@bsi-cx/design-standard-library-email/content-elements/base/divider')
];

module.exports.layoutElements = layoutElements;
module.exports.footerLayoutElements = footerLayoutElements;