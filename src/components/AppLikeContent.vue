<template>
    <div class="body-card">
        <div class="icons">
            <!-- <font-awesome-icon v-for="(icon, i) in 5" :icon="starLogic(i, avarageVotes(votes.vote),isVote(votes.vote), ['fas', 'star'], ['far', 'star'], ['fas', 'star-half-stroke'])" /> -->
             <font-awesome-icon v-for="(icon, i) in avarageVotes(votes.vote)" :icon="['fas', 'star']"  :key="i"/>
            <font-awesome-icon v-if="isDifference((votes.vote / 2), avarageVotes(votes.vote))" :icon="['fas', 'star-half-stroke']" />
            <font-awesome-icon v-for="(icon, i) in (5 - excessVote(votes.vote / 2))" :icon="['far', 'star']" :key="i" />
            
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
                vote: 0,
                maxIcon: 5,
                voteFloats: 0,

            }
        },
        methods: {
            
            // voteFloat(num){
            //     this.voteFloats = num / 2
            //     return this.voteFloats

            // },


            avarageVotes(avarege){
                this.avaregeVote = Math.floor(avarege / 2);

                return this.avaregeVote
            },

            // starLogic(i, avarageVote,vote, array1, array2, array3){
            //     if(i < avarageVote){
            //         return array1
            //     }else{
            //         return array2
            //     }
            // },
            isDifference(num1, num2){
                console.log((num1));
                console.log(num2);
                if(num1 - num2 >= 0.5){
                    return true
                }else{
                    return false
                }

            },
            // regularIcon(num1, num2){
            //     return Math.floor(num2-num1);

            // },

            excessVote(num){
                if(num - Math.floor(num) < 0.5){

                    return num =  Math.floor(num)
                    
                }else if(num - Math.floor(num) >= 0.5){
                    return num = Math.ceil(num)
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
    margin-top: 5px;
    
    .icons{
        color: rgb(255, 247, 0);
        transform: translateY(-1px);
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