import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/general.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar, faThumbsUp, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarReg, faThumbsUp, faStarHalfStroke) 



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
