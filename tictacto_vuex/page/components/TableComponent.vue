
<template>
    <table>
        <slot/>
    </table>
</template>

<script>  
    export default {
        name : 'table-component',
        components : {
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
td {
    border: 1px solid black;
    width : 40px;
    height : 40px;
    text-align: center;
}
</style>