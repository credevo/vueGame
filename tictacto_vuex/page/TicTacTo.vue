
<template>
    <div>
        <table-component :table-data="tableData" @td-click="tdChange"
         @td-test="tdTest"
        />
        <div>현재 trun 은 {{turn}}</div>
        <div> 현재 데이타 는 아래와 같다  </div>
        <div> {{tableData[0]}}</div>
        <div> {{tableData[1]}}</div>
        <div> {{tableData[2]}}</div>
        <div v-if="winner"> {{winner}} 님의 승리</div>
    </div>
    
</template>

<script>  
    import TableComponent from './components/TableComponent.vue'
    export default {
        components : {
            TableComponent
        },
        
        data(){
            return {
                tableData : [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                turn : 'O',
                tableArr : ['','',''],
                winner : '',
            }
        },
        watch : {
            
        }, 
        computed : {

        },
        methods : {
            tdTest(obj){
                console.log(obj);
                /**
                 * Array.splice를 사용해도 변동 되는것을 확인 할수 있다.* 
                 */
                this.tableArr.splice(obj.rowIndex,1,'xxx');
            },
            tdChange(obj){
                debugger;
                console.log(obj);
                // obj.rowIndex
                // obj.cellIndex
                // this.tableData[obj.rowIndex][obj.cellIndex] = 'XX'
                // this.$forceUpdate();
            },
            onClickTd(rowIndex,cellIndex){
                this.$set(this.tableData[rowIndex],cellIndex,this.turn);
                const currntTurn = this.turn;
                //다음 턴 으로 변경
                //
                let win = false;
                let winCase = '';
                //가로 체크
                if(this.tableData[rowIndex][0] === currntTurn
                    && this.tableData[rowIndex][1] === currntTurn
                    && this.tableData[rowIndex][2] === currntTurn
                ) { win = true;
                    winCase = '가로';
                }
                //세로 체크
                if(this.tableData[0][cellIndex] === currntTurn 
                    && this.tableData[1][cellIndex] === currntTurn
                    && this.tableData[2][cellIndex] === currntTurn
                ) { win = true;
                winCase = '세로';}
                // 대각선 체크1 ↘
                if(this.tableData[0][0] === currntTurn 
                    && this.tableData[1][1] === currntTurn
                    && this.tableData[2][2] === currntTurn
                ) { win = true;
                winCase = '대각선 ↘';}
                // 대각선 체크2 ↙
                if(this.tableData[0][2] === currntTurn 
                    && this.tableData[1][1] === currntTurn
                    && this.tableData[2][0] === currntTurn
                ) { win = true;
                winCase = '대각선 ↙';}
                //이긴 경우
                if(win){
                    this.winner = currntTurn;
                    this.turn = 'O';
                    this.tableData = [
                        ['','',''],
                        ['','',''],
                        ['','',''] 
                    ];
                // 지거나 무승부
                }else{
                    let all = true; //all 이 true면 무승부 라는 뜻
                    //값이 모두 존재하면 true 가 되고
                    //반복문을 통해 값이 존재하지 않으면 false로 처리해서
                    // false이면 
                    this.tableData.forEach((row)=>{
                        row.forEach(cell=>{
                            if(!cell){
                                all = false;
                            }
                        })
                    });
                    if(all){ //모두 값이 있다 = 무승부
                        this.turn = 'O';
                        this.tableData = [
                            ['','',''],
                            ['','',''],
                            ['','',''] 
                        ];
                        this.winner = '무승부';
                    }else{
                        //게임이 안 끝났으면 다음 턴으로 넘긴다.
                        this.turn  = currntTurn === 'O'? 'X' : 'O';
                    }
                }
            }
        },
        created(){
        //   this.$bus.$on('clickTd',this.onClickTd);
        },
        mounted(){
        },
        updated(){
        },
        beforeDestory(){ 

        }
        
    }
</script>
