<script>
import { store } from '../store.js'
import AppLikeContent from './AppLikeContent.vue'

export default {
    components :{
      AppLikeContent,
    },
    props: ['infoCard'],
    data() {
        return {
            store: store,

            infoVote: {
                vote: this.infoCard.vote_average,
            }
        }
    },
    methods: {
        associateFlag(lenguage) {

            if (lenguage === 'it') {
                return this.store.flags.it
            } else if (lenguage === 'en') {
                return this.store.flags.en
            } else if (lenguage === 'fr') {
                return this.store.flags.fr
            } else {
                return false
            }

        },
        composeImg(imgPath){
            const url = 'https://image.tmdb.org/t/p/';
            const dimension = 'w185';
            

            return imgPath = url + dimension + imgPath 

        }
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card">
            <div class="box-img">
                <img :src="composeImg(infoCard.poster_path)" alt="">
            </div>
            <AppLikeContent :votes="infoVote" />
            
        </div>
    </div>
    <!-- <div>{{ infoCard.original_title }}
        <span>{{ (infoCard.vote_average).toFixed(2) }}</span>
        <span>{{ infoCard.original_title }}</span> <br>

        <img v-if="associateFlag(infoCard.original_language)" :src="associateFlag(infoCard.original_language)" alt=""
            class="flag">
        <span v-else>{{ infoCard.original_language }}</span>

    </div> -->

</template>

<style lang="scss" scoped>
.col-3{
    width: calc( 3 * (100% / 12));
    height: 300px;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .card{
        display: flex;
        flex-direction: column;
        


        .box-img img{
            height: 280px;


        }



    }
    
}

.flag{
    max-width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
}
</style>