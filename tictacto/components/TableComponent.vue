
<template>
    <table>
        <tr-component  v-for="(rowData,index) in tableData" :key="index"
         :row-data="rowData" :row-index="index"
         > </tr-component>
         <div>
         <!-- @td-click="$emit('td-click',$event)"
         @td-test="$emit('td-test',$event)" -->
             <!-- {{tableObj}} -->
             </div>
    </table>
</template>

<script>  
    // import TdComponent from '../components/TdComponent.vue'
    import TrComponent from './TrComponent.vue'

    export default {
        props : {
            tableData : Array,
            

        },
        components : {
            TrComponent,
            // TdComponent
        },
        data(){
            return {
            }
        },
        watch : {
            
        }, 
        computed : {

        },
        methods : {
            
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
<style scoped>
table {
    border-collapse: collapse;
}

</style>