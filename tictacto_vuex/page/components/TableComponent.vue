
<template>
    <div>
        <table>
            <tr-component  v-for="(rowData,index) in tableData" :key="index" :row-index="index"/>
        </table>
        <div>
            {{turnMessage}}
        </div>
    </div>
</template>

<script>  
    import {mapState, mapGetters} from 'vuex';
    
    import TrComponent from './TrComponent.vue'

    export default {
        name : 'table-component',
        components : {
            TrComponent,
        },
        data(){
            return {
                
            }
        },
        watch : {
            
        }, 
        computed : {
            ...mapState(['tableData']),
            ...mapGetters(['turnMessage']),
            // turnMessage
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