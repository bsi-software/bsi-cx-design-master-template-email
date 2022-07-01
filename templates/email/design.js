require('./styles/styles.scss');

const {cx, SchemaVersion, Locale} = require('@bsi-cx/design-build');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template - E-Mail')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate('30.05.2022')
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('header-VGHXnt')
      .withLabel('Header')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/header-preheader'),
        require('./content-elements/base/logo'),
        require('./content-elements/base/header-img')),
    cx.contentElementGroup
      .withGroupId('layout-NfWlMT')
      .withLabel('Layout')
      .withContentElements(
        require('./content-elements/layout/layout-base'),
        require('./content-elements/layout/layout-colored'),
        require('./content-elements/layout/col-one'),
        require('./content-elements/layout/col-two'),
        require('./content-elements/layout/col-two-ratio-1-2'),
        require('./content-elements/layout/col-two-ratio-2-1'),
        require('./content-elements/layout/col-three')),
    cx.contentElementGroup
      .withGroupId('spacing-divider-cEbF9P')
      .withLabel('Spacing & Divider')
      .withContentElements(
        require('./content-elements/base/spacer-small'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
        require('./content-elements/base/spacer-large'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/divider')),
    cx.contentElementGroup
      .withGroupId('headings-TbGwox')
      .withLabel('Headings & Text')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/title-h1'),
        require('./content-elements/base/title-h2'),
        require('./content-elements/base/title-h3'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/text')),
    cx.contentElementGroup
      .withGroupId('images-hRO9mw')
      .withLabel('Images')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/image'),
        require('./content-elements/base/img-66'),
        require('./content-elements/base/img-50'),
        require('./content-elements/base/img-33'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/img-10')),
    cx.contentElementGroup
      .withGroupId('buttons-BadRb3')
      .withLabel('Buttons')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/cta'),
        require('./content-elements/base/cta-center'),
        require('./content-elements/base/cta-right')),
    cx.contentElementGroup
      .withGroupId('special-content-5C921n')
      .withLabel('Special Content')
      .withContentElements(
        require('./content-elements/base/highlighted-content'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/news-snippet'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/table'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/smiley-rating'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/event')),
    cx.contentElementGroup
      .withGroupId('footer-Ah9a9j')
      .withLabel('Footer')
      .withContentElements(
        require('./content-elements/layout/layout-dark-footer'),
        require('./content-elements/layout/layout-light-footer'),
        require('./content-elements/layout/col-one-footer'),
        require('./content-elements/layout/col-two-footer'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/footer-link'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/social-media-follow')));