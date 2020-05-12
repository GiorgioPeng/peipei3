const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    devServer: {
        disableHostCheck: true,
    },

    publicPath: process.env.NODE_ENV === 'production'
        ? '/peipei3/'
        : '/',
    // 配置别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('~', resolve('src'))
    }
}

