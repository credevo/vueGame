<template>
    <!-- <td @click="onClickTd"> -->
    <td @click="onClickTd">
        {{`${cellData}`}}
        <!-- {{` (${rowIndex},${cellIndex})`}} -->
    </td>
</template>

<script>
    import Vue from 'vue';
    export default {
        name : 'td-component',
        props : {
            cellData : [String,Number],
            rowIndex : Number,
            cellIndex : Number,
        },
        methods : {
            onTest(){
                this.$emit('td-test',{rowIndex : this.rowIndex, cellIndex : this.cellIndex});
            },
            onChange(){
                // this.$parent.$parent.tableObj = 
                // this.$emit('td-click',{rowIndex : this.rowIndex, cellIndex : this.cellIndex});
                /**
                 * splice으로 사용해도 변동되네 vue 공식 사이트에 적혀있더라
                 */
                this.$root.$data.tableData[this.rowIndex].splice(this.cellInex,1,this.$root.$data.turn);
                //primitive 원시 type은 데이타 반응형으로 작동 하더라.
                this.$root.$data.turn  = this.$root.$data.turn === 'O'? 'X' : 'O'; 
            },
            onClickTd(){
                if(this.cellData) return;
                /**
                 * vue에서 배열의 index를 통한 데이타가 변경이 되었더라도
                 * 자식에서 해당되는 props data가 변동이 안되는 현상이 존재한다.
                 * this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
                 * --> 작동되지 않음. 배열 데이타를 변경하기 위해선 다음과 같이 처리해야 한다.
                 * Vue.set(
                 *  this.$root.$data.tableData[this.rowIndex],  //참조
                 *  this.cellIndex,                             //위치
                 *  this.$root.$data.turn                       // 바꿀 value
                 * )
                 * Vue import 대신
                 * this.$set 으로 접근 가능
                 */
                const rootData = this.$root.$data;
                const rowIndex = this.rowIndex;
                const cellIndex = this.cellIndex;
                this.$set(rootData.tableData[rowIndex],cellIndex,rootData.turn);
                const currntTurn = rootData.turn;
                //다음 턴 으로 변경
                //
                let win = false;
                let winCase = '';
                //가로 체크
                if(rootData.tableData[rowIndex][0] === currntTurn
                    && rootData.tableData[rowIndex][1] === currntTurn
                    && rootData.tableData[rowIndex][2] === currntTurn
                ) { win = true;
                    winCase = '가로';
                }
                //세로 체크
                if(rootData.tableData[0][cellIndex] === currntTurn 
                    && rootData.tableData[1][cellIndex] === currntTurn
                    && rootData.tableData[2][cellIndex] === currntTurn
                ) { win = true;
                winCase = '세로';}
                // 대각선 체크1 ↘
                if(rootData.tableData[0][0] === currntTurn 
                    && rootData.tableData[1][1] === currntTurn
                    && rootData.tableData[2][2] === currntTurn
                ) { win = true;
                winCase = '대각선 ↘';}
                // 대각선 체크2 ↙
                if(rootData.tableData[0][2] === currntTurn 
                    && rootData.tableData[1][1] === currntTurn
                    && rootData.tableData[2][0] === currntTurn
                ) { win = true;
                winCase = '대각선 ↙';}
                //이긴 경우
                if(win){
                    rootData.winner = currntTurn;
                    rootData.turn = 'O';
                    rootData.tableData = [
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
                    rootData.tableData.forEach((row)=>{
                        row.forEach(cell=>{
                            if(!cell){
                                all = false;
                            }
                        })
                    });
                    if(all){ //모두 값이 있다 = 무승부
                        rootData.turn = 'O';
                        rootData.tableData = [
                            ['','',''],
                            ['','',''],
                            ['','',''] 
                        ];
                        rootData.winner = '무승부';
                    }else{
                        //게임이 안 끝났으면 다음 턴으로 넘긴다.
                        rootData.turn  = currntTurn === 'O'? 'X' : 'O';
                    }
                }

            }
        }
        
    }
</script>
<style scoped>
td {
    border: 1px solid black;
    width : 40px;
    height : 40px;
    text-align: center;
}
</style>
