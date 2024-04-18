<script>
import axios from 'axios';
import { store } from '../store.js'
import AppSelectContent from './AppSelectContent.vue';
import AppLinkGeneres from './AppLinkGeneres.vue';

export default {
    components: {
        AppSelectContent,
        AppLinkGeneres,
    },
    data() {
        return {
            store: store,
            maxGenres: 5,

        }

    },
    methods: {
        createQuery() {
            if (this.store.selectValue === 'film') {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '61dea49fafd12f70156c7d08eaff1dc0',
                        query: this.store.inputQuery,
                    }
                })
                    .then((res) => {
                        this.store.contents = res.data.results
                        console.log(this.store.contents);
                    })

            } else if (this.store.selectValue === 'serie') {
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '61dea49fafd12f70156c7d08eaff1dc0',
                        query: this.store.inputQuery,
                    }
                }).then((result) => {
                    this.store.contents = result.data.results
                    console.log(this.store.contentsTv);
                })

            } else {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '61dea49fafd12f70156c7d08eaff1dc0',
                        query: this.store.inputQuery,
                    }
                })
                    .then((res) => {
                        this.store.contents = res.data.results
                        console.log(this.store.contents);
                    })
            }




        },

    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key: '61dea49fafd12f70156c7d08eaff1dc0',
            }
        }).then((res) => {
            const visibleGenres = res.data.genres.slice(0, 5);
            console.log(visibleGenres);

            this.store.generi = visibleGenres;

            // this.store.generi = res.data.genres
            // console.log(this.store.generi);
        })
    }

}
</script>

<template>
    <header>
        <div class="row">
            <div class="logo">
                <h2>URLIX</h2>
                <ul class="generi">
                    <AppLinkGeneres v-for="(generi, i) in store.generi" :key="i" :genres="generi" />
                </ul>


            </div>


            <div class="search">
                <AppSelectContent />
                <input @keyup.enter="createQuery()" type="text" placeholder="cerca film..."
                    v-model.trim="store.inputQuery">
                <button @click="createQuery()">cerca</button>

            </div>

        </div>
    </header>


</template>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 100px;
    background-color: black;
    color: white;
    -webkit-box-shadow: inset 0px -11px 42px -35px rgba(245, 242, 245, 1);
    -moz-box-shadow: inset 0px -11px 42px -35px rgba(245, 242, 245, 1);
    box-shadow: inset 0px -11px 42px -35px rgba(245, 242, 245, 1);

    .row {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;

        .logo {
            width: 1120px;
            color: red;
            font-size: 48px;
            display: flex;
            align-items: center;


            .generi {
                margin-left: 15px;
                display: flex;
                font-size: 13px;
                gap: 12px;
            }

        }



        .search {

            display: flex;
            gap: 5px;

            input {
                width: 170px;
                color: black;
                border: none;
                border-radius: 3px;
                background-color: rgba(230, 222, 222, 0.7);
                outline: none;
                padding: 4px 10px;
            }

            button {
                background-color: red;
                border-radius: 3px;
                padding: 4px 10px;
                color: white;
                font-size: 15px;
            }

        }



    }
}
</style>