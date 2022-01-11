<template>
    <!-- <td @click="onClickTd"> -->
    <td @click="onClickTd">
        {{`${cellData}`}}
        <!-- {{` (${rowIndex},${cellIndex})`}} -->
    </td>
</template>

<script>
    import {
        SET_WINNER,
        CLICK_CELL,
        CHANGE_TURN,
        RESET_GAME,
        NO_WINNER,
        GET_TABLE
        } from '../../store/table';
    import {mapState} from 'vuex';

    export default {
        name : 'td-component',
        props : {
            rowIndex : Number,
            cellIndex : Number,
        },
        computed : {
            // vuex의 state는 computed를 통해서 가져온다.
            ...mapState({
                tableData : state=>state.tableData,
                turn :  state => state.turn,
                cellData(state){
                    return state.tableData[this.rowIndex][this.cellIndex];
                }
            }),
        },
        methods : {
            
        }
        
    }
</script>
<style scoped>

</style>
