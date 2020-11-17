/**
 * 因为实际开发过程中，我们需要开发环境的配置和正式上线打包的配置，
 * 因此我们把webpack 分为dev 和 Pro 两种
 * dev 和 Pro 的很多配置由相同的地方，我们抽出基础配置模块
 */

 const path =require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 const {CleanWebpackPlugin} =require('clean-webpack-plugin')

 const rootDir = (dir)=>path.join(__dirname,dir);

 module.exports ={
     entry:"./src/index.tsx", // 程序入口文件
     output:{
         filename:'main.js',// 同步js 的文件名称
         path:rootDir('./dist'),// 打包好以后文件的存放目录
         chunkFilename:'[id].[chunkhash].js',// 异步加载的js 文件名称
         //publicPath:'/static', 前缀
     },
     module:{
         rules:[// 验证规则集合
            // 解析ts tsx 为js 文件
            {
                test:/\.(ts|tsx)$/,// typescript 后缀名为ts, ts-react: tsx
                exclude:/node_modules/,// 不解析node_modules 里面的文件，加快解析速度
                use:'ts-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:'babel-loader' // 配置使用babelrc 
            },
            {
                // 处理less 样式
                test:/\.less$/,
                exclude:/node_modules/,
                use:[
                    // style-loader 把解析好的css通过style 标签插入到html的head标签里面
                    'style-loader',
                    // 解析css 样式
                    'css-loader',
                    // 把less 语法携程css 样式
                    'less-loader'
                ]
            }
         ]
     },
     resolve:{
         // 设置后缀名，webpack 4以后不允许有空值
         // 设置完后缀名，使用import 导入的时候可以不带后缀名，会自动匹配下面设置的
        extensions:[".tsx",".ts",".js",".json"]
     },
     plugins:[ // 插件集合
        // html 
        new HtmlWebpackPlugin({
            template:'./build/index.html'
        }),
        new CleanWebpackPlugin()
     ],
     

 }