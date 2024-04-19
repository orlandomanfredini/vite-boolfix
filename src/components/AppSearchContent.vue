<template>
    <div>
        Per questa ricerca sono stati trovati {{ store.infoApi.total_results }}, {{ selectVisible() }}
        "{{ store.staticInputQuery }}"
    </div>
</template>

<script>

import { store } from '../store';

    export default {
        data(){
            return {
                store: store,
            }
        },
        methods: {
            selectVisible(){
                if(this.store.selectValue == ''){
                    return this.store.selectVisible = 'film'
                }else{
                    return this.store.selectValue
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
div{
    color: red
}

</style>