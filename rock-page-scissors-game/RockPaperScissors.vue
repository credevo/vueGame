<template>
<div>
    <div id="computer" :style="computedStyle"></div>
    <div>
        <button @click="onClickEvent('가위')">가위</button>
        <button @click="onClickEvent('바위')">바위</button>
        <button @click="onClickEvent('보')">보</button>
    </div>
    <div> {{result}}</div>
    <div> 현재 {{score}} </div>
</div>
</template>
<script>
    let refCoord = {
        '가위' : '310px',
        '바위' : 0,
        '보'  : '180px'
    }
    // let URL = 'https://m1.daumcdn.net/cfile254/image/2416A346568C9B09240A10';
    // let imgPath = '../img/rockpaperscissors.png';
    // 왜 안되지 jpg 파일만 되는건가...
    //
    let interval = null;
    
    const scores = {
        가위 : 1,
        바위 : 0,
        보 : -1
    };

    const computerChoice = (imgCoord) =>{
        return Object.entries(refCoord).find(function(v){
            return v[1] === imgCoord;
        })[0];
    }
    export default{
        data(){
            return{
                imgCoord : refCoord['바위'],
                result : [],
                score : 0,
            }
        },
        computed : {
            computedStyle(){
                console.count();
                return {
                    background :`url('https://en.pimg.jp/023/182/267/1/23182267.jpg') ${this.imgCoord} 0`
                }
            }
        },
        methods : {
            changeHand() {
                interval=setInterval(() => {
                if(this.imgCoord==refCoord['바위'])
                    this.imgCoord=refCoord['가위'];
                else if(this.imgCoord==refCoord['가위'])
                    this.imgCoord=refCoord['보'];
                else
                    this.imgCoord=refCoord['바위'];
                }, 1000);
            },
            onClickEvent(choice){ //choice is '가위','바위','보'
                clearInterval(interval); // setInterval 멈춤
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                const diff = myScore - cpuScore;
                if(diff === 0){
                    this.result = '비겼습니다.';
                }else if([-1,2].includes(diff)){
                    this.result = '이겼습니다.';
                    this.score += 1;
                }else{
                    this.result = '졌습니다.';
                    this.score -= 1;
                }
                this.changeHand();

            }
        },
        // life cycle
        beforeCreat(){
            console.log('beforeCreat');
        },
        created(){
            console.log('created');
        },
        beforeMount(){
            console.log('beforeMount');
        },
        mounted(){
            console.log('mounted');
            this.changeHand();
        },
        beforeUpdate(){
            console.log('beforeUpdate');
        },
        updated(){
            console.log('updated');
        },
        beforeDestory(){
            console.log('beforeDestory');
            clearInterval(interval);
        },
        destoryed(){
            console.log('destoryed');
        },
        
    }
</script>
<style scoped>
#computer{
    width: 150px;
    height : 200px;
}
</style>