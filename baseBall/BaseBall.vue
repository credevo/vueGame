<template>
    <div>
       <h1> 야구 게임 </h1>
       <form @submit="onSubmit">
           <input :value="value" />
       </form>
       {{result}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value : '',
                result : '',
            }
        },
        methods : {
            onSubmit(e){
                e.preventDefault();
            }
        }
        
    }
</script>
