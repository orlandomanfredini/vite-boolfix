<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      store: store,
    }
  },
  mounted() {
     
  }
}

</script>


<template>
  <AppHeader />
  <AppContent />

  

</template>

<style lang="scss">
@use './assets/scss/general.scss'
</style>
