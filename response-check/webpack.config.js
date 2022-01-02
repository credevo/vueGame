const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path  = require('path');
const { Hmac } = require('crypto');

module.exports = {
    mode : 'development',
    devtool :'eval', //개발용
    resolve : {
        extensions : ['.js','.vue']
    },
    entry : {
        app : path.join(__dirname, 'main.js'),
    },
    module :{
        rules : [
            {test :/\.vue$/, loader : 'vue-loader'}
        ],
    },
    plugins :[new VueLoaderPlugin()],
    output : {
        filename : '[name].js',
        path : path.join(__dirname,'dist')
    },
    
} 
