<script>
import { store } from '../store.js'
import CardContent from './CardContent.vue';
import AppEmpty from './AppEmpty.vue';
import AppSearchContent from './AppSearchContent.vue';

export default {
    components: {
        CardContent,
        AppEmpty,
        AppSearchContent,
    },
    data() {
        return {
            store: store,
        }
    },
}
</script>

<template>

    <main>
        <AppSearchContent v-if="(store.contents.length !== 0)" />
        <div class="row">

            
            <AppEmpty v-if="store.emptyContent !== ''" />
            

            <CardContent v-for="(film, i) in store.contents" :key="i" :infoCard="film" />

        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    background-color: black;
   




    .row {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
}
</style>