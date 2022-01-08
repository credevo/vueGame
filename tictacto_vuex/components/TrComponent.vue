<template>
    <tr>
        <td-component v-for="(cellData,index) in rowData" :key="index" 
            :cell-data="cellData"  
            :row-index="rowIndex" 
            :cell-index="index"
            ></td-component>
    </tr>
            <!-- @td-click="$emit('td-click',$event)"
            @td-test="$emit('td-test',$event)" -->
</template>

<script>
import TdComponent from './TdComponent.vue'
export default {
    name : 'tr-component',
    props : {
        rowData : Array,
        rowIndex : Number,
    },
    components: { TdComponent },
    
}
</script>
