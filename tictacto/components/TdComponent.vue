<template>
    <!-- <td @click="onClickTd"> -->
    <td @click="onChange">
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
                
                this.$set(this.$root.$data.tableData[this.rowIndex],this.cellIndex,this.$root.$data.turn)
                this.$root.$data.turn  = this.$root.$data.turn === 'O'? 'X' : 'O';
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
