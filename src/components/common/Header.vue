<template>
  <header>
    <article class="heading">
      <article class="logo">
     <router-link to="/"><img src="../../assets/images/LOGO.png" alt="logo"></router-link>
      </article>
      <nav>
        <ul class="navigation">
          <li v-if="isLoggedIn"> <span>{{currentUser}}</span></li>
          <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
          <li><router-link to="/register" v-if="!isLoggedIn">Register</router-link></li>
          <li><router-link to="/trips" v-if="isLoggedIn">Travels</router-link></li>
          <li><router-link to="/create" v-if="isLoggedIn">Add Trip</router-link></li>
          <li> <a @click="logout" class="nav-link" v-if="isLoggedIn">Logout</a></li>
        </ul>
      </nav>
    </article>
  </header>
</template>


<script>
import firebase from 'firebase'
export default {
     name: "Header",
     data() {
       return {
         isLoggedIn: false,
         currentUser: false
       }
     },
     created() {
    if(firebase.auth().currentUser){
      this.isLoggedIn = true;
      this.currentUser= firebase.auth().currentUser.email;
    }
     },
     methods: {
       logout: function() {
         firebase.auth().signOut().then(() => {
           this.$router.go({path: this.$router.path});
         })
       }
     }
}
</script>
<style scoped>
.logo img{
  margin-left: 25px;
}

.heading {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.navigation {
  list-style-type: none;
  padding: 0 7rem;
  float: right;
  margin: 0;
}
.navigation li a, .navigation span {
  color: #172b4d;
  text-align: center;
  text-decoration: none;
  font: bold 13px Helvetica, sans-serif;
  line-height: 1.2;
  padding: 0 1rem;
}
.nav-link{
  cursor: pointer;
}
.navigation li {
  display: inline-block;
}
.navigation li a:hover {
  color: #5e72e4;
}
</style>