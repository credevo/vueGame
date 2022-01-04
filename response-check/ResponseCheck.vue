<template>
<div>
   <div id="screen" :class="state" @click="onClickScreen" >{{message}}</div>
   <div>
       <div>평균 시간 : {{}} </div>
       <button @click="onReset">리셋</button>
       <div>12</div>
   </div>
</div>
</template>
<script>
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
            },
            onClickScreen(){
                switch (this.state){
                    case 'waiting' : this.state = 'ready'; break;
                    case 'ready' : this.state='now'; break;
                    case 'now' : this.state='waiting'; break;
                }
            }
        }
    }
</script>
/**
    scoped를 써야 해당 컴포넌트파일 안에서만 작동하는 style을 적용 될수 있다.
    scoped를 쓰지 않으면 일반적인 css 파일이다.
 */
<style scoped>


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