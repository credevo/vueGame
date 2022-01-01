<template>
    <div>
       <h1> 야구 게임 </h1>
       <form @submit.prevent="onSubmit">
           <input v-model="value" />
       </form>
       <template v-for="str in result">
           <div>{{str}}</div>
       </template>
    </div>
</template>

<script>
    const getNumbers  = function(){
        const candidates = [1,2,3,4,5,6,7,8,9];
        const arr = [];
        for(let i=0, len=4 ; i < len; i++){
            const  chose = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];
            arr.push(chose);
        }
        return arr;
    }
    export default {
        data(){
            return {
                answer : getNumbers(),
                value : '',
                result : [],
            }
        },
        created(){
            console.log(this.answer);
        },
        methods : {
            onSubmit(e){
                //정답을 맞췄을때는 정답 형태로 표시하고

                //정답이 아닐때는 누적해서 string으로 보여줘라.
                // result에 담긴 for문으로 보여줄거야^0^
                let ball  = 0;
                let strike = 0;
                // validate
                if(this.value && this.value.length ==4){
                    if(this.value == this.answer.join('')){
                        alert('정답입니다.');
                        this.result=[];
                        this.value ='';
                        this.answer = getNumbers();
                    }else{
                        this.value.split('').forEach((numStr,index)=>{
                            if(this.answer[index]==parseInt(numStr)){
                                strike++;
                            }else if(this.answer.includes(parseInt(numStr))){ 
                                ball++;
                            }else{

                            }
                        })
                        this.result.push(this.value + 'strike:' + strike + ' ball:'+ball);
                    }
                }else{
                    alert('숫자 4개를 입력해주세요\n잘못 입력하셨습니다.');
                }                
            }
        }
    }
</script>