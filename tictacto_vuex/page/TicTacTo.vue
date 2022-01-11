
<template>
    <div>
        <table-component/>
        <div>현재 trun 은 {{turn}}</div>
        <div v-if="winner"> {{winner}} 님의 승리</div>
    </div>
    
</template>

<script>  
    import { mapState } from 'vuex';
    
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
            //vuex mapper
            //1. object 형태(arrowFunction, function)
            //2.array 형태
            ...mapState({
                turn(state){
                    return state.turn;  // return state.turn + this.data  this접근가능
                },
                winner(state){
                    return state.winner;
                }
            }),
        },
        methods : {
            onClickTd(){
                
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
