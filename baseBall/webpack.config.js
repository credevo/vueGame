

const path  = require('path');


// node의 모듈 만들기
// webpacking~ start
// script를 하나로 뭉쳐주는 역할 = webpack
// entry, module, plugin, output
module.exports = {
    entry : {
        // app는 합쳐지는 파일의 이름 이며, 시작점은 main.js 
        app : './main.js',
    },
    module :{
        // 합칠때 규칙을 적는다.
        rules : [{}],
    },
    // 부가적인 기능 
    plugin :[],
    output : {
        filename : '[name].js', //  = 'app.js',
        path : 'dist' // 폴더 경로 dist폴더안에 app.js이 최종 결과물로 나오게 된다.
    },
}