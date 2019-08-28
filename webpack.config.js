var path=require('path');

const vueLoaderPlugin=require('vue-loader/lib/plugin');
//自动生成html文件的插件
var htmlWebpackPlugin=require('html-webpack-plugin');


var webpack=require('webpack');

module.exports={
    entry:path.join(__dirname,'src/main.js'),//入口文件
    output:{
        path:path.join(__dirname,'dist'),
        filename: "bundle.js"//配置输出文件
    },
    devServer:{
        open:true,
        port:3000,
        hot:true

    },
    plugins: [
        //添加plugins节点配置插件
        new htmlWebpackPlugin({
            template: path.join(__dirname,'src/index.html'),
            filename: "index.html"//自动生成html文件路径
        }),
        new vueLoaderPlugin()
    ],
    module:{
        rules: [
            {test: /\.css$/,use: ['style-loader','css-loader']},
            {test:/\.(png|jpg|gif|ttf)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader', exclude: /node_modules/},
            {test:/\.vue$/, use: 'vue-loader'}
        ]
    },
    // resolve:{
    //     alias:{
    //         'vue$':'vue/dist/vue.esm.js'
    //     }
    // }


}