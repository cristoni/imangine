const withPlugins = require('next-compose-plugins');
const plugins = [];

plugins.push( require("@zeit/next-sass") );

if (process.env.NODE_ENV === 'production') {
  const purgeOptions = {
    purgeCss: {
      whitelist: () => ['body']
    }
  };

  plugins.push( [require("next-purgecss"), purgeOptions] );
}

module.exports = withPlugins( plugins );