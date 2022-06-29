const path = require('path');

const {BuildConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('master-template-cx-22.0-email')
    .withVersion('1.0.0')
    .withDesignType(DesignType.EMAIL)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'email'))
    .withPropertiesFilePath('properties.js'));