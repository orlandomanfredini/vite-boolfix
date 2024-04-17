<script>
import { store } from '../store.js'
import CardContent from './CardContent.vue'

export default {
    components: {
        CardContent,
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
        <div class="row">

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