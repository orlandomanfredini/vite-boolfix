<template>
    <select name="content" id="" v-model="store.selectValue">
        <option value="" disabled>Scegli</option>
        <option value="film" selected >Film</option>
        <option value="serie">Series</option>
    </select>
</template>

<script>
import { store } from '../store';

    export default {
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
select{
    background-color: transparent;
    color: red;
    border: none;
    outline: none;
}

</style>