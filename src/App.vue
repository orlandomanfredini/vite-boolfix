<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppTrend from './components/AppTrend.vue';
export default {
  components: {
    AppHeader,
    AppContent,
    AppTrend,
  },
  data() {
    return {
      store: store,
      
    }
  },
  mounted() {
    
  },
  methods: {
    visibleTrend(){
      
    }
  }
}

</script>


<template>
  <AppHeader />
  <AppTrend v-if="store.visibleTrend === true" />
  <AppContent />


  

</template>

<style lang="scss">
@use './assets/scss/general.scss'
</style>
