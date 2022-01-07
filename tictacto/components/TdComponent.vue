<template>
    <td >
        {{`${cellData} (${rowIndex},${cellIndex})`}}
    </td>
</template>

<script>
    export default {
        name : 'td-component',
        props : {
            cellData : [String,Number],
            rowIndex : Number,
            cellIndex : Number,
        }
        
    }
</script>
