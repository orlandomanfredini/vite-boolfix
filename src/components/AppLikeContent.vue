<template>
    <div class="body-card">
        <div class="icons">
            <font-awesome-icon v-for="(icon, i) in 5" :icon="starLogic(i, avarageVotes(votes.vote), ['fas', 'star'], ['far', 'star'])" />
            
        </div>

        <div class="vote">
            <font-awesome-icon class="vote-like" :icon="['fas', 'thumbs-up']" />
            {{ (votes.vote / 2).toFixed(1) }}
        </div>

    </div>
</template>

<script>
import {store} from '../store.js'
    export default {

        props: ['votes'],
        data(){
            return{
                store: store,
                avaregeVote: 0,

            }
        },
        methods: {
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
.body-card{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icons{
        color: rgb(255, 247, 0);
    }

    .vote{
        color: red;

        .vote-like{
            font-size: 13px;
            color: red;
        }
    }
}
</style>