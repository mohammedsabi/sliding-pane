const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './docs/src/app.js',
    output: { filename: './docs/dist/bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                      "react",
                      ["es2015", { "modules": false } ]
                    ]
                }
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './docs/dist/bundle.css',
            allChunks: true
        }),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'source-map'
};
