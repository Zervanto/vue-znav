var path = require('path');
var webpack = require('webpack');
//删除文件夹的插件
var cleanPlugin = require('clean-webpack-plugin');
//自动生成html页面的插件
var htmlPlugin = require('html-webpack-plugin');
//抽取css文件插件
var extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
        app:path.resolve(__dirname,'src/js/app.js'),
        vendors:['react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
            rules:[
                    {   
                        test:/\.jsx?$/,
                        exclude:/node_modules/,
                        use:"babel-loader" 
                    },
                    //处理css
                    {
                        test:/\.css?$/,
                        use:extractTextPlugin.extract({
                            fallback:"style-loader",
                            loader:"css-loader"
                        }),                   
                    },
                    //处理sass,scss
                    {
                        test:/\.scss?$/,
                        // use:["style-loader","css-loader","sass-loader"]
                        use:extractTextPlugin.extract({
                            fallback:"style-loader",
                            loader:["css-loader","sass-loader"]
                        })
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
            ]
    },
    plugins:[
        //清除文件夹插件
        new cleanPlugin(['dist']),
        //自动创建html，压缩
        new htmlPlugin({
            template:'./src/template.html',
            htmlWebpackPlugin:{
                "files":{
                    "css":"app.css",
                    "js":["vendors.js","bundle.js"]
                }
            },
            //压缩,去掉注释，空格，缩进
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
        }),
        //内置插件，分离第三方应用
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
        new extractTextPlugin('app.css'),
        //内置插件，压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        //在构建过程中删除警告
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        })
    ],
}