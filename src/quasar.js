import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/mdi-v5/mdi-v5.css'
import { Quasar,Dialog,Notify } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: { Dialog, Notify
  },
  extras: [
    'material-icons',
    'material-icons-outlined',
    'material-icons-round',
    'material-icons-sharp',
    'mdi-v5',
    'fontawesome-v5'
  ]
 })