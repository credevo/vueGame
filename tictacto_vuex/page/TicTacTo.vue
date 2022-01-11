
<template>
    <div>
        <table-component>
            <tr v-for="(rowData,rowIndex) in tableData" :key="rowIndex" >
                <td v-for="(cellData,cellIndex) in rowData" :key="cellIndex" 
                    @click="onClickTd(rowIndex,cellIndex,cellData)">
                    {{cellData}}
                </td>
            </tr>
        </table-component>
        <div>현재 trun 은 {{turn}}</div>
        <div v-if="winner"> {{winner}} 님의 승리</div>
    </div>
    
</template>

<script>  
    import { SET_WINNER, CLICK_CELL,CHANGE_TURN,RESET_GAME,NO_WINNER,GET_TABLE} from '../store/table';
    import { mapState } from 'vuex';
import TableComponent from './components/TableComponent.vue';
    
    export default {
        components : {TableComponent},
        
        data(){
            return {
                
            }
        },
        watch : {
            
        }, 
        computed : {
            //vuex mapper
            //1. object 형태(arrowFunction, function)
            //2.array 형태
            ...mapState(['tableData','turn','winner'])          
        },
        methods : {
            onClickTd(rowIndex,cellIndex,cellData){
                if(cellData) return;
                //
                //
                this.$store.commit(CLICK_CELL,{row :rowIndex ,cell :cellIndex});
                //
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
                    this.$store.commit(SET_WINNER,currntTurn);
                    this.$store.commit(RESET_GAME)
                // 지거나 무승부
                }else{
                    let all = true; //all 이 true면 무승부 라는 뜻
                    this.tableData.forEach((row)=>{
                        row.forEach(cell=>{
                            if(!cell){
                                all = false;
                            }
                        })
                    });
                    if(all){ //모두 값이 있다 = 무승부
                        this.$store.commit(NO_WINNER);
                        this.$store.commit(RESET_GAME)

                    }else{
                        this.$store.commit(CHANGE_TURN);
                    }
                }

            }
        },
        created(){
        },
        mounted(){
        },
        updated(){
        },
        beforeDestory(){ 

        }
        
    }
</script>
