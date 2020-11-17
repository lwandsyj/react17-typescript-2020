const baseConfig =require('./webpack.base.config')
const webpack =  require('webpack')
const {merge} =require('webpack-merge')
const devConfig ={
    // 开发模式，环境，webpack 根据开发环境不同做了不同的优化和配置
    mode:'development',
    // devtool 开启sourceMap，方便跟踪错误调试
    devtool:'eval-cheap-module-source-map',
    devServer:{
        port:8081,// 端口号
        host:'0.0.0.0',// 域名，可以外部访问
        open:true,// 是否自动打开浏览器
        hot:true,// 热更新
        
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig,devConfig);