<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store,

        }

    },
    methods: {
        createQuery() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '61dea49fafd12f70156c7d08eaff1dc0',
                    query: this.store.inputQuery,
                }
            })
                .then((res) => {
                    this.store.contents = res.data.results
                    console.log(this.store.contents);
                });

            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: '61dea49fafd12f70156c7d08eaff1dc0',
                    query: this.store.inputQuery,
                }
            }).then((result) => {
                this.store.contentsTv = result.data.results
                console.log(this.store.contentsTv);
            })

        },
    }
}
</script>

<template>
    <header>
        <div class="row">
            <div class="logo">URLIX</div>
            

            <div class="search">
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
            color: red;
            font-size: 48px;
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