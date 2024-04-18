<template>
    
  <li>{{ genres.name }}</li>
  
</template>

<script>
import { store } from '../store';

    export default {
        props: ['genres'],
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>