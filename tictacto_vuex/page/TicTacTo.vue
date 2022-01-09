
<template>
    <div>
        <table-component/>
        <div>현재 trun 은 {{turn}}</div>
        <div v-if="winner"> {{winner}} 님의 승리</div>
    </div>
    
</template>

<script>  
    //
    import TableComponent from './components/TableComponent.vue'
    export default {
        components : {
            TableComponent
        },
        
        data(){
            return {
                
            }
        },
        watch : {
            
        }, 
        computed : {
            turn(){
                return this.$store.state.turn;
            },
            winner(){
                return this.$store.state.winner;
            }
        },
        methods : {
            onClickTd(){
                
            }
        },
        created(){
        //   this.$bus.$on('clickTd',this.onClickTd);
        },
        mounted(){
        },
        updated(){
        },
        beforeDestory(){ 

        }
        
    }
</script>
