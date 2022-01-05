const path  = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    resolve : {
        extensions : ['.js','.vue']
    },
    entry : {
        app : path.join(__dirname, 'main.js'), 
    },
    module :{ //javascript가 아닐때 loader들의 역할
        rules : [
            {test :/\.vue$/, loader : 'vue-loader'},
            {test :/\.css$/, use :['vue-style-loader','css-loader']}, // .. sass loader ...
        ],
    },
    plugins :[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template : './RockPaperScissors.html'
        })
    ],
    output : {
        path : path.join(__dirname,'dist'),
        filename : '[name].js',  // name이라는 변수가 들어오는데, entry에 적용한 key값인 app이 들어온다. name : app 이다.
    },

} 
