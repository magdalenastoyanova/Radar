import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

const NewTrip = () => import(/* webpackChunkName: "NewTrip" */ "@/components/trips/NewTrip");
const TripDetails = () => import(/* webpackChunkName: "TripDetails" */ "@/components/trips/TripDetails");
const TripEdit = () => import(/* webpackChunkName: "TripEdit" */ "@/components/trips/TripEdit");
const SignIn = () => import(/* webpackChunkName: "SignIn" */ "@/components/user/SignIn");
const SignUp = () => import(/* webpackChunkName: "SignUp" */ "@/components/user/SignUp");
const Trips = () => import(/* webpackChunkName: "Trips" */ "@/components/trips/Trips");
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/components/common/NotFound');
import firebase from 'firebase';

Vue.use(Router);
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/login",
      name: "login",
      component: SignIn,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: SignUp,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: "/trips",
      name: "trips",
      component: Trips,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/create",
      name: "create",
      component: NewTrip,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/details/:name",
      name: "detailsTrip",
      component: TripDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit/:name",
      name: "edit",
      component: TripEdit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
  },
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      next({
        path: '/trips',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      next();
    }
  } else{
    next();
  }
})

export default router;