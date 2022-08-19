const path = require('path');

const {BuildConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

const emailBuildConfig = new BuildConfig()
  .withName('master-template-cx-22.0-email')
  .withVersion('1.0.0')
  .withDesignType(DesignType.EMAIL)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, 'templates', 'email'))
  .withPropertiesFilePath('properties.js');

module.exports = WebpackConfigBuilder.fromConfigs(
  emailBuildConfig.clone()
    .withName('master-template-cx-22.0-email')
    .withTargetVersion(Version.CX_22_0),
  emailBuildConfig.clone()
    .withName('master-template-cx-1.3-email')
    .withTargetVersion(Version.CX_1_3));