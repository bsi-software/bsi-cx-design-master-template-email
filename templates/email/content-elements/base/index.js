const contentElements = [
  require('./title-h2'),
  require('./title-h3'),
  require('./cta-center'),
  require('./cta-right'),
  require('./cta-full-width'),
  require('./img-with-style')
];

const spacerElements = [
  require('./spacer-small'),
  require('./spacer-large')
];

const colOneElements = [
  ...contentElements,
  ...spacerElements
];

const colTwoElements = [
  ...contentElements,
  ...spacerElements,
  require('./img-50')
];

const colTwoSlimElements = [
  ...contentElements,
  ...spacerElements,
  require('./img-33')
];

const colTwoWideElements = [
  ...contentElements,
  ...spacerElements,
  require('./img-66')
];

const colThreeElements = [
  ...contentElements,
  ...spacerElements,
  require('./img-33')
];

module.exports.contentElements = contentElements;
module.exports.spacerElements = spacerElements;
module.exports.colOneElements = colOneElements;
module.exports.colTwoElements = colTwoElements;
module.exports.colTwoSlimElements = colTwoSlimElements;
module.exports.colTwoWideElements = colTwoWideElements;
module.exports.colThreeElements = colThreeElements;