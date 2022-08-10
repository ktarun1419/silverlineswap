import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'
import Toaster from "@meforma/vue-toaster";
createApp(App).use(store).use(router).use(Toaster).use(Notifications).mount('#app')
