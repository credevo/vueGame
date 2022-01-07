
<template>
    <div>
        <table-component :table-data="tableData"/>
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
                    ['1', '2', '3'],
                    ['4', '5', '6'],
                    ['7', '8', '9'],
                ]
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
