const {css} = require('@bsi-cx/design-build');

module.exports = {

  /* ============================================================= */
  /*	                           Colors	                           */
  /* ============================================================= */

  /* ------------------------ Base Colors ------------------------ */

  primaryColor: css.color('#16616d'),
  secondaryColor: css.color('#ff7d00'),
  darkColor: css.color('#000000'),
  lightColor: css.color('#ffffff'),

  /* --------------------- Background Colors --------------------- */

  // Elements using layoutBaseBackgroundColor: layout base
  layoutBaseBackgroundColor: css.color('#ffffff'),

  // A bright and neutral color should be chosen here, a discrete color matching the primary or secondary color can be generated here: https://mycolor.space/
  // Elements using layoutColoredBackgroundColor: layout with background color
  layoutColoredBackgroundColor: css.color('#f4f4f4'),
  layoutColoredBackgroundColorDarkMode: css.color('#383e42'),

  // Elements using highlightedBackgroundColor: highlighted content
  highlightBackgroundColor: css.color('#efe3d4'),
  highlightBackgroundColorDarkMode: css.color('#7c3d01'),

  // Elements using eventBackgroundColor: event
  eventBackgroundColor: css.color('#ff7d00'),

  // Elements using footerBackgroundColor: footer layout base
  footerDarkBackgroundColor: css.color('#383e42'),
  // Elements using footerLightBackgroundColor: footer layout light
  footerLightBackgroundColor: css.color('#ffffff'),

  /* ------------------------ Text Colors ------------------------ */

  // Elements using textColor: text, header date, image caption
  baseTextColor: css.color('#000000'),

  // Elements using titleColor: heading 1, heading 2, heading 3
  titleTextColor: css.color('#16616d'),

  // Elements using eventTextColor: event
  eventTextColor: css.color('#ffffff'),

  // Elements using footerTextColor: footer address, 1 footer column, 2 footer column
  footerDarkTextColor: css.color('#ffffff'),
  // Elements using footerLightTextColor: footer address, 1 footer column, 2 footer column
  footerLightTextColor: css.color('#000000'),

  /* ---------------------- Button Colors ------------------------ */

  // Elements using buttonTextColor: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonTextColor: css.color('#ffffff'),

  // Elements using buttonBorderColor: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonBorderColor: css.color('#16616d'),

  // Elements using buttonBackgroundColor: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonBackgroundColor: css.color('#16616d'),

  /* -------------------------- Others --------------------------- */

  // Elements using preHeaderColor: linked text in pre-header
  linkColor: css.color('#ff7d00'),

  // Elements using dividerColor: divider
  dividerColor: css.color('#e6e6e6'),



  /* ============================================================= */
  /*	                           Fonts	                           */
  /* ============================================================= */

  // List for web safe CSS fonts: https://www.cssfontstack.com/
  // List for choosing fallback fonts: https://help.campaignmonitor.com/email-builder-font-compatibility

  // Elements using baseFontFamily: text, header date, pre-header, footer address, image caption
  baseFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif, Trebuchet MS',

  // Elements using titleFontFamily: heading 1, heading 2, heading 3
  titleFontFamily: 'Calibri, Carlito, PT Sans, Trebuchet MS, sans‑serif, Tahoma, Verdana, Trebuchet MS',

  // Elements using buttonFontFamily: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif, Trebuchet MS',


  /* ============================================================= */
  /*	                           Sizes	                           */
  /* ============================================================= */

  /* ----------------------- Layout width ------------------------ */

  // Width of e-mail layout in px
  // IMPORTANT: MUST be a multiple of 12
  // Reason: This ensures that two-columns and three-columns receive whole and even numbers, which are needed for correct display in Outlook.
  layoutWidth: 660,

  // Width of columns in px
  // Elements using colOneWidth: 1 column
  colOneWidth: 660,
  // Elements using colTwoWidth: 2 columns
  colTwoWidth: 660 / 2,
  // Elements using colTwoSlimWidth: 2 columns ratio 1:2, 2 columns ratio 2:1
  colTwoSlimWidth: 660 / 3,
  // Elements using colTwoWideWidth: 2 columns ratio 1:2, 2 columns ratio 2:1
  colTwoWideWidth: 660 / 3 * 2,
  // Elements using colThreeWidth: 3 columns
  colThreeWidth: 660 / 3,

  // Elements using headerWidth: header image
  headerWidth: 660,
  // Elements using headerHeight: header image
  headerHeight: 320,

  // Width of footer columns in px
  // Elements using colOneFooterWidth: 1 footer column
  colOneFooterWidth: 660,
  // Elements using colTwoFooterWidth: 2 footer columns
  colTwoFooterWidth: 300,

  // Width of colored footer
  // If set to "true", the colored background of the footer fills the entire width of the screen.
  // If you want the colored background to be limited in width, set this to "false" and specify the width in pixels in the "footerBackgroundColorWidth" property below.
  footerBackgroundColorFillsFullScreen: true,
  // Uncomment and define, if "footerBackgroundColorFillsFullScreen" is false and the colored background should be limited in width.
  // footerBackgroundColorWidth: 660,

  /* --------------------- Margin / Padding ---------------------- */

  // Margin bottom in px
  // Elements using baseMarginBottom: images, cta (left, center, right), divider, event, header image, pre-header, highlighted content, news snippet, social media follow, table, text, titles
  baseMarginBottom: 12,

  // Padding top, right, bottom and left in px
  // Elements using columnPadding: 1 column, 2 columns, 2 columns ratio 1:2, 2 columns ratio 2:1, 3 columns
  columnPadding: 10,
  // Elements using columnFooterPadding: 1 footer column, 2 footer columns
  columnFooterPadding: 10,

  // Footer paddings in px
  // Elements using footerBasePadding: footer layout base
  footerDarkPadding: 30,
  // Elements using footerLightPadding: footer layout light
  footerLightPadding: 4,
  // Elements using footerLinkPaddingBottom: footer link
  footerLinkPaddingBottom: 10,

  /* --------------------------- Text ---------------------------- */

  // Font size in px

  // Elements using baseFontSize: images captions, cta (left, center, right), footer link, pre-header, table, text
  baseFontSize: 14,

  // Elements using fontSizeH1: heading 1
  fontSizeH1: 28,
  // Elements using fontSizeH2: heading 2
  fontSizeH2: 24,
  // Elements using fontSizeH3: heading 3
  fontSizeH3: 20,

  // Elements using fontSizePreHeader: Pre-Header
  fontSizePreHeader: 14,
  preHeaderInfoText: 'Pre-header text here. | ',
  preHeaderLinkText: 'View in Browser',

  // Elements using fontSizeNewsTitle: news snippet
  fontSizeNewsTitle: 28,
  // Elements using fontSizeNewsHeadline: news snippet
  fontSizeNewsHeadline: 14,
  // Elements using fontSizeNewsText: news snippet
  fontSizeNewsText: 14,

  // Elements using fontSizeEventText: event
  fontSizeEventText: 16,

  // Line height in px

  // Elements using lineHeightH1: heading 1
  lineHeightH1: 32,
  // Elements using lineHeightH2: heading 2
  lineHeightH2: 28,
  // Elements using lineHeightH3: heading 3
  lineHeightH3: 24,

  // Elements using textLineHeight: text
  textLineHeight: 22,

  /* -------------------------- Images --------------------------- */

  // Width of images in px

  // Elements using imageWidth100Percent: image 100% width
  // calculation: layoutWidth - 20
  imageWidth100Percent: 640,
  // Elements using imageWidth66Percent: image 66% width
  // calculation: layoutWidth = (imageWidth33Percent + 20) + (imageWidth66Percent + 20)
  imageWidth66Percent: 420,
  // Elements using imageWidth50Percent: image 50% width
  // calculation: layoutWidth = (imageWidth50Percent + 20) * 2
  imageWidth50Percent: 310,
  // Elements using imageWidth33Percent: image 33% width
  // calculation: layoutWidth = (imageWidth33Percent + 20) + (imageWidth66Percent + 20)
  // calculation: layoutWidth = (imageWidth33Percent + 20) * 3
  imageWidth33Percent: 200,
  // Elements using imageWidth10Percent: image 10% width
  imageWidth10Percent: 60,

  // add rounded corners to images
  // Please note: this does NOT work in Outlook on Windows!
  // Elements using imageBorderRadius: header image, 
  imageBorderRadius: 0,

  // set the dimension of the header logo. Use either 'logoWidth' OR 'logoHeight', not both
  // Elements using logoWidth: logo
  logoWidth: 60,
  //logoHeight: 50,

  /* -------------------------- Others --------------------------- */

  // Border radius in px
  // Elements using the properties below: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonBorderRadius: 5,
  // font weight of the button text
  buttonFontWeight: 'normal',
  // font size of the button text
  buttonFontSize: 14,
  // padding of the button
  buttonHorizontalPadding: 30,
  buttonVerticalPadding: 10,
  // if set to true, the button will span the entire width. When set to false, it will resize according to the text length
  buttonFullWidth: false,

  // Height of spacing elements in px
  // Elements using spacerHeightSmall: spacing small
  spacerHeightSmall: 10,
  // Elements using spacerHeightMedium: spacing medium
  spacerHeightMedium: 24,
  // Elements using spacerHeightLarge: spacing large
  spacerHeightLarge: 40,

  // Divider height in px
  // Elements using dividerHeight: divider
  dividerHeight: 2,

  // Height of social media icons in px
  // Elements using socialMediaIconHeight: social media follow
  socialMediaIconHeight: 20,
  
  // Alignment of social media icons
  // Elements using socialMediaIconAlignment: social media follow
  socialMediaIconAlignment: 'center',

  // font weight of news title
  fontWeightNewsText: 'normal',

  /* ============================================================= */
  /*	                          Layout  	                         */
  /* ============================================================= */

  // Elements using alignmentLeft: text, CTA button left aligned
  alignmentLeft: 'left',

  // Elements using alignmentCenter: CTA button center aligned, layout light footer
  alignmentCenter: 'center',

  // Elements using alignmentRight: CTA button right aligned
  alignmentRight: 'right',

  /* ============================================================= */
  /*	                   Social Media Follow                       */
  /* ============================================================= */
  // uncomment this section to customize the list of available Social Networks
  // images must be relatvie to this file. We recommend to place them in the 'static' folder
  // socialMediaFollow: [
  //   {
  //     name: 'Web',
  //     img: css.url(__dirname, 'static', 'Website.png'),
  //     url: 'https://www.example.com'
  //   }, {
  //     name: 'Mail',
  //     img: css.url(__dirname, 'static', 'Mail.png'),
  //     url: 'mailto:info@example.com'
  //   }, {
  //     name: 'LinkedIn',
  //     img: css.url(__dirname, 'static', 'LinkedIn.png'),
  //     url: 'https://www.linkedin.com/company/example'
  //   }, {
  //     name: 'Facebook',
  //     img: css.url(__dirname, 'static', 'Facebook.png'),
  //     url: 'https://www.facebook.com/example/'
  //   },
  // ]

  /* ============================================================= */
  /*	                          Address	                           */
  /* ============================================================= */

  // used in footer address element
  addressPhoneText: '+41 71 000 00 00',
  addressPhoneURL: 'tel:0041710000000',
  addressEmailText: 'info@example.com',
  addressEmailURL: 'mailto:info@example.com',
  addressWebText: 'www.example.com',
  addressWebURL: 'https://www.example.com/',

}