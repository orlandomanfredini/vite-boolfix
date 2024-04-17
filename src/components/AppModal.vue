<template>
   
        <div class="modal">
            <h4>{{ modalInfo.title }}</h4>
            <h5>{{ modalInfo.original_title }}</h5>
            <p>{{ modalInfo.overview }}</p>
            <div>
                Vote:
                <font-awesome-icon class="icon" v-for="(icon, i) in 5" :icon="starLogic(i, avarageVotes(voteInfo.vote), ['fas', 'star'], ['far', 'star'])" />
            </div>
            <div class="vote">
                <font-awesome-icon class="red" :icon="['fas', 'thumbs-up']" />
                {{ modalInfo.vote_count }}
            </div>
            <div class="date">{{ modalInfo.release_date }}</div>
            
            


            

        </div>
    

</template>

<script>

import { store } from '../store';

export default {
    components:{
        

    },
    props: ['modalInfo', 'voteInfo'],
    data() {
        return {
            store: store,
        }
    },
    methods:{
        avarageVotes(avarege){
                this.avaregeVote = Math.floor(avarege / 2);

                return this.avaregeVote
            },

            starLogic(i, vote, array1, array2){
                if(i < vote){
                    return array1
                }else{
                    return array2
                }
            }
    }
}
</script>

<style lang="scss" scoped>
.modal {

    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.88);
    color: white;
    position: absolute;
    border: 2px solid white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    h4{

        color: red;
        margin-bottom: 7px;
    }

    p{
        margin-bottom: 12px;
    }

    .icon{
        color: rgb(255, 234, 0);
    }

    .vote{

        margin-top: 5px;

        .red{
        color: red;
    }

    }

    .date{
        margin-top: 5px;
    }

    
}
</style>