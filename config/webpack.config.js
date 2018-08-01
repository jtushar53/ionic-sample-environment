var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

module.exports = function () {
  console.log(process.env.APP_ENV);
    useDefaultConfig[process.env.IONIC_ENV].resolve.alias = {
        "@environment": path.resolve(__dirname + '/../src/config/config.' + process.env.APP_ENV + '.ts'),
    };
    return useDefaultConfig;
};
