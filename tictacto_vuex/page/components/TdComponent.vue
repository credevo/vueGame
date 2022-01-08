<template>
    <!-- <td @click="onClickTd"> -->
    <td @click="onClickTd">
        {{`${cellData}`}}
        <!-- {{` (${rowIndex},${cellIndex})`}} -->
    </td>
</template>

<script>
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
                // this.$bus.$emit('clickTd',this.rowIndex,this.cellIndex);
                

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
