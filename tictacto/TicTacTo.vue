
<template>
    <div>
        <table-component :table-data="tableData" @td-click="tdChange"
         @td-test="tdTest"
        />
        <div>현재 trun 은 {{turn}}</div>
        <div> {{tableArr}}</div>
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
