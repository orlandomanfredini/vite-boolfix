<template>
    <div>
       <h4>{{ store.emptyContent }}</h4>
       
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
div{
    color: white;
}

</style>