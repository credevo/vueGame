<!-- 
** 기본 정보 lotto ball colors
01-10 : 빨강
11-20 : 주황
21-30 : 노랑
31-40 : 파랑
41-45 : 보라
** 추가 정보
6개 추첨 + 1개 보너스
-->

<template>
    <div>
        <div>
            <div>당첨 숫자 </div>
            <div id="결과창">
                <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball" ></lotto-ball>
            </div>
        </div>
        <div>
            <div >보너스</div>
            <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        </div>
        <button @click="onClick">한번 더! </button>
    </div>
</template>

<script>
    function getWinNumbers(){
        console.log('getWinNumbers');
        //1.Array로 빈배열 45개 만들고 ->
        //2.fill로 undefind로 채우고 -> 
        //3. index인 i값(초기0)에 +1 형식으로 1~45까지 숫자가 담긴 배열을 만든다
        const candidate = Array(45).fill().map((v,i)=>i+1); 
        const shuffle = [];
        while(candidate.length >0){
            //1. Math.random() * candidate.length : 자리수 만큼의 숫자 랜덤수를 만든다. (0.001xx * 0.9xx ) * (length:45)=> 0.xx~44.xx 까지
            //2. Math.floor 해서 정수부만 챙긴다. => 랜덤으로 뽑힌 정수값들 =  배열의 인덱스 0~44의 랜덤 뽑기
            //3. Array.splice 하여 랜덤index에 해당하는 배열값 1개만 뽑는다.Array.splice(랜덤index,1);
            //4. Array.splice로 뽑힌 배열형태로 리턴하고 그 리턴의 0번 인덱스로 shuffle에 넣는다.
            // 결론 : 1~45까지의 숫자 배열을 => 랜덤하게 뽑아서 => shuffle에 넣는다(섞힌 숫자 배열 탄생);
            shuffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);
        }
        const bonusNumber = shuffle[shuffle.length-1]; //보너스 숫자는 섞인 숫자배열에서 마지막것을 사용한다.
        //1. 섞인 숫자배열 크기 45개인것을 인덱스 0~ 6까지 총 7자리까지만 사용하고,
        //2. 그것을 Array.sort를 통해 정렬한다.
        // sort가 음수이면 false니깐 수행안하고 양수면 true니깐 소트 한다. 
        // true가 될려면 앞에꺼 크니깐 소트되어 둘이 바꾼다.
        const winNumbers = shuffle.slice(0,6).sort((p,c) => p - c); 
        return [...winNumbers, bonusNumber];
    }
    const timeouts=[];
    //
    import LottoBall from './LottoBall';
    export default {
        components: { LottoBall },
        data(){
            return {
                winNumbers : getWinNumbers(), //로또 번호 뽑은 것
                winBalls : [], // 로또 볼 컴포넌트에 제공될 ball data array
                bonus : null,
                redo : false,
            }
        },
        watch : {
            /**
             * watch는 비동기적 성향이므로, 되도록 쓰지 않고 구현하는게 source의 복잡도를 줄인다.
             */
            // winNumbers:{
            //     deep : true,
            //     handler(){
            //         this.showBalls();
            //     }
            // }
            // bonus(n,o){
            //     if(n == false){
            //         this.showBall();
            //     }
            // }
        }, 
        computed : {

        },
        methods : {
            onClick(){
                this.winNumbers= getWinNumbers();
                this.winBalls= [];
                this.bonus= null;
                this.redo= false;
                this.showBalls();
            },
            showBalls(){
                for(let i=0; i< this.winNumbers.length-1 ; i+=1){
                timeouts[i]=setTimeout(()=>{
                    this.winBalls.push(this.winNumbers[i]);
                    },(i+1)*1000)
                }
                timeouts[6]=setTimeout(()=>{
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                },7000);
            }
        },
        mounted(){
            this.showBalls();
        },
        updated(){
        },
        beforeDestory(){
            timeouts.forEach((t)=>clearTimeout(t));
        }
        
    }
</script>
