/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // This is to mute EVERY SINGLE WARNING RELATED TO WEBPACK (that has respective regex inside of exclude array), so
        // if there's some unexpected result from webpack, blame this.
        const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
        config.plugins.push(new FilterWarningsPlugin({
            exclude: [/Critical dependency/, /require.extensions is not supported/],
        }))
        return config;
      },
}

module.exports = nextConfig
