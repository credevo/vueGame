const deepFreeze = function(obj){
    // 기본 freeze
    Object.freeze(obj);
    // props 중에 obj 인경우 freeze 
    var props = Object.getOwnPropertyNames(obj);
    for(let i=0, len=props.length; i < len ; i+=1){
        if(typeof obj[props[i]] == 'object'){
            console.log(obj[props[i]]);
            deepFreeze(obj[props[i]]);
        }
    }
}

var dataArr = {
    a : 1,
    b : {
        b1 : {
            b2 : {
                b3 : 1
            }
        }
    },
    c : {
        c1 : {
            c2 :10
        }
    },
    d : 1,
}

deepFreeze(dataArr);
console.log("====test");
dataArr.a = 2;
console.log(dataArr.a);f
dataArr.b.b1.b2.b3=3;
dataArr.c.c1.c2=20;
console.log(dataArr.c.c1.c2);