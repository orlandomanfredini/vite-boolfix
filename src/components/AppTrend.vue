<template>
    <main>
        <h3>Top migliori uscite della settimana di <strong>FILM</strong> e <strong>SERIE TV</strong></h3>
        <div class="row">
            

            <CardContent v-for="(content, i) in store.trendContents" :key="i" :infoCard="content" />
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardContent from './CardContent.vue';



export default {
    components: {
        CardContent,
    },
    data() {
        return {
            store: store,
        }
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/trending/all/week', {
            params: {
                api_key: '61dea49fafd12f70156c7d08eaff1dc0',
            }
        }).then((res) => {
            console.log(res.data);
            this.store.trendContents = res.data.results;
        })

    }
}
</script>

<style lang="scss" scoped>
main {
    background-color: black;



    h3 {
        padding-top: 25px;
        padding-left: 32px;
        color: white;

        strong{
            color: red;
        }
    }

    .row {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;



    }
}
</style>