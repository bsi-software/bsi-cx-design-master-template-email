const path = require('path');
const version = require('./package.json').version;

const {BuildConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

const emailBuildConfig = new BuildConfig()
  .withName('master-template-cx-22.0-email')
  .withVersion(version)
  .withDesignType(DesignType.EMAIL)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, 'templates', 'email'))
  .withPropertiesFilePath('properties.js')
  .withAdditionalFilesToCopy({
    from: path.resolve(__dirname, 'templates', 'email', 'static', 'header-image.png'),
    to: 'static/header-image.png',
  });

module.exports = WebpackConfigBuilder.fromConfigs(
    emailBuildConfig.clone()
        .withName('master-template-cx-1.3-email')
        .withTargetVersion(Version.CX_1_3),
    emailBuildConfig.clone()
        .withName('master-template-cx-22.0-email')
        .withTargetVersion(Version.CX_22_0),
    emailBuildConfig.clone()
        .withName('master-template-cx-23.2-email')
        .withTargetVersion(Version.CX_23_2));