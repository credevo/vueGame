<template>
    
</template>

<script>
import TdComponent from './TdComponent.vue'
export default {
    name : 'tr-component',
    props : {
        rowIndex : Number,
    },
    components: { TdComponent },
    computed : {
        rowData(){
            return this.$store.state.tableData[this.rowIndex];
        }
    }
    
}
</script>
