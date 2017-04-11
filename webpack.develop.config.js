var path = require('path');
var webpack = require('webpack');
//自动打开浏览器插件
var openBrowerPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'src/js/app.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //webpack1的写法 webpack2兼容1的写法
    //module:{
    //     loaders:{
    //         test:/\.jsx?$/,
    //         loader:'babel-loader',
    //         query:{
    //             presets:['es2015','react']
    //         }
    //     }
    // }
    //webpack2的写法
    module:{
            rules:[

                    //处理css
                    {
                        test:/\.css?$/,
                        use:["style-loader","css-loader"]                    
                    },
                    //处理sass,scss
                    {
                        test:/\.scss?$/,
                        use:["style-loader","css-loader","sass-loader"]
                    },
                    //处理图片25000bit = 3kb
                    {
                        test:/\.(png|jpg|jpeg|gif)$/,
                        use:'url-loader?limit=25000&name=images/[name].[ext]'
                    },
                    //处理字体
                    {
                        test:/\.(eot|woff|ttf|woff2|svg)$/,
                        use:'url-loader?limit=25000&name=images/[name].[ext]'
                    },
                    //处理vue组件
                    {
                        test:/\.vue$/,
                        use:'vue-loader'
                    }
            ]
    },
    // resolve:{
    //     //处理文件的扩展文件名
    //     extensions:['','.js','.json','scss','.jsx']
    // },
    devServer:{
        contentBase:__dirname+'/src',
        hot:true,
        inline:true//默认是true 与resolve冲突
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new openBrowerPlugin({
            url:'http://localhost:8080/',
            browser:'chrome'
        })
    ]
}