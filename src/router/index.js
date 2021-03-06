import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewTrip from '@/components/trips/NewTrip'
import TripDetails from '@/components/trips/TripDetails'
import TripEdit from '@/components/trips/TripEdit'
import SignIn from '@/components/user/SignIn'
import SignUp from '@/components/user/SignUp'
import Trips from '@/components/trips/Trips'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trips',
      name: 'trips',
      component: Trips
    },
    {
      path: '/create',
      name: 'create',
      component: NewTrip
    },   {
      path: '/details/:name',
      name: 'detailsTrip',
      component: TripDetails
    },   {
      path: '/edit/:id',
      name: 'edit',
      component: TripEdit
    },   {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },   {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ]
})
