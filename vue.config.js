module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    runtimeCompiler: true,
    lintOnSave: false, // eslint-loader 是否在保存的时候检查

    devServer: {
        disableHostCheck: true,
        port: 8080,
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 给js和css配置版本号
            config.output.filename('js/[name].js').end();
            config.output.chunkFilename('js/[name].js').end();
            config.plugin('extract-css').tap(args => [{
                filename: `css/[name].css`,
                chunkFilename: `css/[name].css`
            }])
        }
    }
}