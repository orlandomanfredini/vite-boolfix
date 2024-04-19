<template>
    
  <li @click="returnGenre()">{{ genres.name }}</li>
  
</template>

<script>
import axios from 'axios';
import { store } from '../store';

    export default {
        props: ['genres'],
        data(){
            return{
                store: store,
            }
        },
        methods: {
            returnGenre(){
                axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${this.genres.id}`, {
                    params: {
                        api_key: '61dea49fafd12f70156c7d08eaff1dc0',
                    }
                })
                .then((res)=>{
                    
                    this.store.genresContent = res.data.results;
                    console.log(this.store.genresContent);
                    
                })
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>