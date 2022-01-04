<template>
<div>
   <div id="screen" :class="state" @click="onClickScreen" >{{message}}</div>
   <div>
       <div>평균 시간 : {{result.reduce((o,n)=>o+n,0)/result.length || 0}} </div>
       <button @click="onReset">리셋</button>
       <div>12</div>
   </div>
</div>
</template>
<script>
    let startTime = 0;
    let endTime = 0;
    let timeOut = null;
    export default{
        data(){
            return{
                result : [],
                state : 'waiting',
                message : '클릭해서 시작하세요',
                data : '안녕'
            }
        },
        computed : {
            computedClass(){
                return this.state;
            }
        },
        created(){
            // const random 
            // const interValId = setInterval(003,)
        },
        methods : {
            onReset(){
                this.result = [];
            },
            onClickScreen(){
                switch (this.state){
                    case 'waiting' : 
                        this.state = 'ready';
                        this.message= '초록색이 되면 클릭하세요';
                        setTimeout(()=>{
                            this.state = 'now';
                            startTime = new Date();
                        }, parseInt(Math.random()*1000+2000)) //2~3초 사이 랜덤
                        break;
                    case 'ready' :
                        clearTimeout(timeOut);
                        this.state='now';
                        this.message= '너무 성급하시군요! 초록색이 된후에 클릭하세요';
                        break;
                    case 'now' :
                        this.state='waiting';
                        endTime=new Date();
                        this.result.push(endTime-startTime);
                        this.message= '클릭해서 시작하세요';
                        break;
                }
            }
        }
    }
</script>
<style scoped>
/**
    scoped를 써야 해당 컴포넌트파일 안에서만 작동하는 style을 적용 될수 있다.
    scoped를 쓰지 않으면 일반적인 css 파일이다.
 */
    #screen {
        width : 300px;
        height : 200px;
        text-align: center;
        user-select : none;
    }
    #screen.waiting {
        background-color : aqua;
    }
    #screen.ready {
        background-color : red;
    }
    #screen.now {
        background-color : greenyellow;
    }
</style>