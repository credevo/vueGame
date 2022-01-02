/**
 * 어떤 파일이든 javascript 파일로 합치는게 webpack의 장점
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path  = require('path');
const { Hmac } = require('crypto');


// node의 모듈 만들기
// webpacking~ start
// script를 하나로 뭉쳐주는 역할 = webpack
// entry, module, plugin, output
module.exports = {
    mode : 'development',
    devtool :'eval', //개발용
    // devtool : 'hidden-source-map' 배포용 production 
    resolve : {// 확장자를 처리하는
        extensions : ['.js','.vue'] //  import 할때 vue나 js 를 설정 안해줘도 된다.
    },
    entry : {
        // app는 합쳐지는 파일의 이름 이며, 시작점은 main.js 
        app : path.join(__dirname, 'main.js'),
    },
    module :{ // 합칠때 규칙을 적는다.
        rules : [
            // webpack는 기본적으러 js 처리하는데,vue파일은 vue-loader가 처리
            {test :/\.vue$/, loader : 'vue-loader'}
        ],
    },
    // 부가적인 기능 - ouput 나오기전에 후처리 해줌
    plugins :[new VueLoaderPlugin()],
    output : {
        filename : '[name].js', //  = 'app.js',
        path : path.join(__dirname,'dist') // 폴더 경로 dist폴더안에 app.js이 최종 결과물로 나오게 된다.
    },
    
} 

// 특정 버전 lib install
// npm i vue@1.1.1 형식으로

// Babel 은 javascript 최신 문법 사용할때나,
// 오래된 ie 를 지원하기 위해 setting 해야 한다.
// 현재는 필요가 없다.

/**
 * node의 모듈 시스템
 * require(...);
 * module.exports={...}
 * 
 */
/**
 * javascript의 모듈 시스템
 * import ... from '...';
 * export default{...}
 */

