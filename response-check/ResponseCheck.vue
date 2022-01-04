<template>
<div>
   <div id="screen" :class="state" @click="onClickScreen" >{{message}}</div>
   <div v-show="result.length">
       <!-- 태그 display:none -->
       <div>평균 시간 : {{average}} </div>
       <button @click="onReset">리셋</button>
       <div>{{result}}</div>
   </div>
   <template v-if="result.length">
       <!-- 태그 자체가 안보임 -->
       <div>평균 시간 : {{average}} </div>
       <button @click="onReset">리셋</button>
       <div>{{result}}</div>
   </template>
</div>
</template>
<script>
    let startTime = 0;
    let endTime = 0;
    let timeOut = null;
    //
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
            // computed는 캐싱되는데, dom이 다시 그려지는 때는 화면의 data가 변경될때 생기는데,
            // computed에 해당하는 data가 변경이 없는경우는 그대로 보이니깐 성능상으로 이점으로
            // 가져갈수 있게 된다. 
            average(){
                return this.result.reduce((o,n)=>o+n,0)/this.result.length || 0;
            }
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
                        timeOut = setTimeout(()=>{
                            this.state = 'now';
                            startTime = new Date();
                        }, parseInt(Math.random()*1000+2000)) //2~3초 사이 랜덤
                        break;
                    case 'ready' :
                        console.log(1);
                        clearTimeout(timeOut);
                        this.state='waiting';
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