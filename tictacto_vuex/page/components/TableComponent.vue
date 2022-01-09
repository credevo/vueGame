
<template>
    <table>
        <tr-component  v-for="(rowData,index) in tableData" :key="index" :row-index="index"/>
    </table>
</template>

<script>  
    // import TdComponent from '../components/TdComponent.vue'
    import TrComponent from './TrComponent.vue'

    export default {
        name : 'table-component',
        components : {
            TrComponent,
        },
        data(){
            return {
                // tableData : [
                //     ['', '', ''],
                //     ['', '', ''],
                //     ['', '', ''],
                // ],
            }
        },
        watch : {
            
        }, 
        computed : {
           tableData(){
               return this.$store.state.tableData;
           }

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