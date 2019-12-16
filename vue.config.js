const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
    publicPath: './',    // 基本路径
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@$', resolve('src'))
        .set('@api', resolve('src/api'))
        .set('@assets', resolve('src/assets'))
        .set('@comp', resolve('src/components'))
        .set('@views', resolve('src/views'))
        .set('@layout', resolve('src/layouts'))
    },
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    /* less 变量覆盖，用于自定义 ant design 主题 */
                    /*
                    'primary-color': '#f60',
                    'link-color': '#f60',
                    'border-radius-base': '4px',
                     */
                },
            }
        }
    },
};
