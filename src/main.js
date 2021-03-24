import Vue from 'vue'
import App from './App'
import router from './router'
import VueToastr from 'vue-toastr';
import firebase from 'firebase'
import './components/firebaseInit'

Vue.config.productionTip = false

Vue.use(VueToastr, {
	defaultTimeout: 3000,
	defaultPosition: 'toast-top-center',
});

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})


